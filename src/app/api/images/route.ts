import { NextApiRequest } from "next";
import { OrderBy, createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "odUhwf1NLBPUDS34Ts2AZWjvJjckQU4s32xFrS7B9EA",
  fetch,
});

const limit = 12;
export async function GET(request: NextApiRequest) {
  const url = new URL(request.url || "");
  const searchParams = url.searchParams;
  const page = Number(searchParams.get("page")) || 1;

  const res = await unsplash.photos.list({ perPage: limit, page, orderBy: OrderBy.LATEST }, {});

  const response = res.response ?? {
    results: [],
    total: 0,
  };

  const images = response.results.map((image) => {
    return {
      id: image.id,
      url: image.urls.regular,
      description: image.alt_description,
      width: image.width,
      height: image.height,
      user: {
        name: image.user.name,
        url: image.user.links.html,
      },
    };
  });

  return Response.json({
    data: {
      images,
      total: response.total,
      page,
      limit,
    },
  });
}
