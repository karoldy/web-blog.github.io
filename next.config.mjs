// import type { NextConfig } from 'next';
// import nextra from 'nextra';
 
// const withNextra = nextra({
//   // theme: "nextra-theme-docs",
//   // themeConfig: "./theme.config.jsx",
//   // contentDirBasePath: '/docs' // Or even nested e.g. `/docs/advanced`
// })

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: 'export',
// };

// // const isGithubActions = process.env.GITHUB_ACTIONS || false;
// // if (isGithubActions) {
// //   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
// //   nextConfig.assetPrefix = `/${repo}/`
// //   nextConfig.basePath = `/${repo}`
// // }

// console.log(nextConfig);

// export default withNextra(nextConfig);
import nextra from 'nextra';
 
// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
  contentDirBasePath: '/docs'
});
 
// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
})