import config from "@/config";

export const fetchData = async () => {
  const reqOptions = {
    headers: {
      authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  const req = await fetch(`${config.api}/api/projects?populate=*`, reqOptions);
  const res = await req.json();

  return res;
};
