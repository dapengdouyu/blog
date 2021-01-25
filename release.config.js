module.exports = {
  branch: "master",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
        changelogTitle:
          "# Changelog\n\nAll notable changes to this project will be documented in this file.",
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/exec",
      {
        publishCmd: "",
        // semantic-release 语法会导致这个问题
        // eslint-disable-next-line
        // 'npm_config_registry=https://registry.npm.bg.huohua.cn npx @huohua/pkm-cli deploy --pversion ${nextRelease.version}.$CI_PIPELINE_ID --env $CI_ENVIRONMENT_NAME --id $CI_PROJECT_NAME --target miniapp,web --dir build --cdn-strategy v2 --use-apisix true',
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"],
      },
    ],
  ],
};
