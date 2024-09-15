import config from "@/config";
import { fetchData } from "@/lib/fetchData";
import Image from "next/image";

const ProjectDetails = async () => {
  const data = await fetchData();

  const images = data.data[0].attributes.media.data;

  return (
    <main>
      <div className="mx-[16px] py-[96px]">
        <div>
          {images.map((i: any) => {
            const { url, mime, name } = i.attributes;

            // Check if the file is a video or an image based on the MIME type
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

            return null; // Return null for unsupported types (if any)
          })}

          <Image
            src={`${config.api}${data.data[0].attributes.media.data[0].attributes.url}`}
            alt="Default image"
            width={700}
            height={700}
          />
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
