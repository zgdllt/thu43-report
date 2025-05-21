module.exports = {
  // 选项...
  publicPath: process.env.NODE_ENV === 'production'
    ? '/thu43-report/' // 替换为你的GitHub仓库名
    : '/',
  outputDir: "docs",
};
