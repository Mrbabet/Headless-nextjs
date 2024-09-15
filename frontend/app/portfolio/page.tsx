import config from "@/config";
import { fetchData } from "@/lib/fetchData";
import Image from "next/image";

const Portfolio = async () => {
  const data = await fetchData();

  return (
    <main>
      <div className="mx-[16px] py-[96px] flex flex-col gap-[36px]">
        {data.data.map((el: any) => {
          const portfolio = el.attributes;

          return (
            <div key={el.id}>
              <div>
                {portfolio.media.data.map((i: any) => {
                  const { url, mime, name } = i.attributes;

                  if (name && name.startsWith("Okladka")) {
                    if (mime.startsWith("image")) {
                      return (
                        <Image
                          key={i.id}
                          src={`${config.api}${url}`}
                          alt={name || "Image"}
                          width={343}
                          height={343}
                        />
                      );
                    } else if (mime.startsWith("video")) {
                      return (
                        <video
                          key={i.id}
                          width="343"
                          height="343"
                          loop
                          muted
                          autoPlay
                        >
                          <source src={`${config.api}${url}`} type={mime} />
                          Your browser does not support the video tag.
                        </video>
                      );
                    }
                  }

                  return null;
                })}
              </div>

              <div className="mt-[20px] max-w-[343px]  ">
                <h2 className="font-bold mb-[6px] text-[15px]">
                  {portfolio.title}
                </h2>

                {portfolio.overview.map((block: any, index: number) => (
                  <p key={index} className="text-[14px]">
                    {block.children.map((child: any, childIndex: number) => (
                      <span key={childIndex}>{child.text}</span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Portfolio;
