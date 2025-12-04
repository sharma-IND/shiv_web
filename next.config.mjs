import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
});

const nextConfig = {
  // ✅ THIS IS THE CRITICAL LINE THAT CREATES /out
  output: "export",

  images: {
    unoptimized: true,
  },

  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
