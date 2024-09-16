import config from "@/config";
import { fetchData, fetchDataById } from "@/lib/fetchData";
import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetchData();

  return data.data.map((project) => ({
    id: project.id.toString(),
  }));
}

const ProjectDetails = async ({ params }) => {
  const data = await fetchDataById(params.id);

  return (
    <main>
      <div className="mx-[16px] py-[96px]">
        <div>
          {data.data.attributes.media.data.map((i: any) => {
            const { url, mime, name } = i?.attributes;

            if (mime.startsWith("image")) {
              return (
                <Image
                  key={i.id}
                  src={`${config.api}${url}`}
                  alt={name || "Image"}
                  width={700}
                  height={700}
                />
              );
            } else if (mime.startsWith("video")) {
              return (
                <video key={i.id} width="700" height="700" loop muted autoPlay>
                  <source src={`${config.api}${url}`} type={mime} />
                  Your browser does not support the video tag.
                </video>
              );
            }
          })}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
