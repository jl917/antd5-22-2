(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["4f971f12"],{"4f971f12":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"texts",{enumerable:!0,get:function(){return n;}}),t("9c68d913");let n=[{value:"Hi, I'm ",paraId:0},{value:"Wxh16144",paraId:0},{value:". I have discovered some tools that can improve development efficiency and code quality through learning Ant Design's component library and participating in community contributions. I'd like to take this opportunity to share my experience with you. To help better understand Ant Design, and to apply these techniques to your own projects.",paraId:0},{value:"Ant Design is hosted on GitHub as an open-source project, making it easy to communicate and collaborate with developers around the world, and allowing developers to submit issues and pull requests. Additionally, we can well manage the code repository and automate workflows such as testing and deployment through utilizing GitHub Actions and its CI/CD capabilities.",paraId:1,tocIndex:0},{value:"GitHub Actions is a platform for automating software development workflows, Developers can easily customize and configure their own workflows by adding YAML format files to the ",paraId:2,tocIndex:1},{value:".github/workflows",paraId:2,tocIndex:1},{value:" directory to define the workflow and implement CI (continuous integration). By\xa0Understanding GitHub Actions.We can grasp some concepts within workflows through ",paraId:2,tocIndex:1},{value:"understanding GitHub actions",paraId:2,tocIndex:1},{value:".",paraId:2,tocIndex:1},{value:"Event",paraId:3,tocIndex:1},{value:": Triggers a workflow run, such as when someone creates an issue, a pull request, or pushes code to a branch.",paraId:3,tocIndex:1},{value:"Job",paraId:3,tocIndex:1},{value:": A workflow consists of one or more jobs that run in parallel by default, but can be set to run sequentially. Each job can contain multiple steps.",paraId:3,tocIndex:1},{value:"Step",paraId:3,tocIndex:1},{value:": Defines the work to be done for a particular section. Each step runs as a separate process. Each item under this section is a separate operation or shell script.",paraId:3,tocIndex:1},{value:"Here's a visual representation from the official documentation that shows the relationship between ",paraId:4,tocIndex:1},{value:"Event",paraId:4,tocIndex:1},{value:", ",paraId:4,tocIndex:1},{value:"Job",paraId:4,tocIndex:1},{value:" and ",paraId:4,tocIndex:1},{value:"Step",paraId:4,tocIndex:1},{value:":",paraId:4,tocIndex:1},{value:"With the knowledge we have gained, we know that all of Ant Design's workflows are managed in the ",paraId:5,tocIndex:2},{value:".github/workflows",paraId:5,tocIndex:2},{value:" directory.",paraId:5,tocIndex:2},{value:"Ant Design's CI covers the following aspects:",paraId:6,tocIndex:2},{value:"Community management",paraId:7,tocIndex:2},{value:": Use GitHub Actions to perform quality checks on issues/PRs and improve collaboration efficiency through comments and labels.",paraId:7,tocIndex:2},{value:"Code quality",paraId:7,tocIndex:2},{value:": Use ESLint and Prettier to perform code standard checks to ensure code quality and consistency.",paraId:7,tocIndex:2},{value:"Testing",paraId:7,tocIndex:2},{value:": Use Jest and testing-library to perform unit tests and snapshot tests to ensure code correctness and stability.",paraId:7,tocIndex:2},{value:"Build",paraId:7,tocIndex:2},{value:": Build ES5 and ES6 module specifications to ensure the library can be used in different environments.",paraId:7,tocIndex:2},{value:"Deployment",paraId:7,tocIndex:2},{value:": Use ",paraId:7,tocIndex:2},{value:"dumi",paraId:7,tocIndex:2},{value:" to automatically generate documentation and publish it to GitHub Pages.",paraId:7,tocIndex:2},{value:"As a feature on the GitHub platform, issues serve as a centralized information hub for collecting community feedback and problems. Collaborators can add labels, milestones, and assignees to better organize tasks and projects.",paraId:8,tocIndex:3},{value:"Ensuring issues contain sufficient information helps us to analyze and prioritize. We provide an ",paraId:9,tocIndex:4},{value:"issue assistant",paraId:9,tocIndex:4},{value:" to standardize the process of creating issues. Additionally, we use GitHub Actions to check the issues created to auto close if it not pass the assistant's checks. Which will be labeled as ",paraId:9,tocIndex:4},{value:"Invalid",paraId:9,tocIndex:4},{value:", and leaving comment to remind the creator how to ask a question properly.",paraId:9,tocIndex:4},{value:"However, team members may sometimes be unable to obtain effective information from the provided content. In such cases,will add labels such as ",paraId:10,tocIndex:4},{value:"\u{1F914} Need Reproduce",paraId:10,tocIndex:4},{value:", ",paraId:10,tocIndex:4},{value:"needs-more-info",paraId:10,tocIndex:4},{value:", or ",paraId:10,tocIndex:4},{value:"help wanted",paraId:10,tocIndex:4},{value:" to notice reporter improving the issue. The ",paraId:10,tocIndex:4},{value:"issue-labeled.yml",paraId:10,tocIndex:4},{value:" file records different labels triggering corresponding comment reply jobs.",paraId:10,tocIndex:4},{value:"For some common issues, the team provides detailed answers to help developers solve problems more quickly. For example, when the title of an issue contains keywords such as ",paraId:11,tocIndex:5},{value:"can not open",paraId:11,tocIndex:5},{value:", ",paraId:11,tocIndex:5},{value:"website",paraId:11,tocIndex:5},{value:", ",paraId:11,tocIndex:5},{value:"down",paraId:11,tocIndex:5},{value:", ",paraId:11,tocIndex:5},{value:"IE",paraId:11,tocIndex:5},{value:", etc., the ",paraId:11,tocIndex:5},{value:"issue-open-check.yml#L43-L94",paraId:11,tocIndex:5},{value:" job records the standard reply format in detail and will automatically close the issue.",paraId:11,tocIndex:5},{value:"Using GitHub Actions scheduled tasks to help manage and close issues, these automated operations can effectively avoid excessive accumulation of unprocessed issues.",paraId:12,tocIndex:6},{value:"issue-close-require.yml",paraId:13,tocIndex:6},{value:": Checks issues marked as ",paraId:13,tocIndex:6},{value:"\u{1F914} Need Reproduce",paraId:13,tocIndex:6},{value:" or ",paraId:13,tocIndex:6},{value:"needs-more-info",paraId:13,tocIndex:6},{value:" at a scheduled time. If these tags are not removed after 3 days, the issue will be automatically commented on and closed.",paraId:13,tocIndex:6},{value:"issue-check-inactive.yml",paraId:13,tocIndex:6},{value:": Scheduled to check issues which have no activity within the last 30 days every 15 days and add an ",paraId:13,tocIndex:6},{value:"Inactive",paraId:13,tocIndex:6},{value:" label to them, without closing. If modified or has new comments, the ",paraId:13,tocIndex:6},{value:"Inactive",paraId:13,tocIndex:6},{value:" and ",paraId:13,tocIndex:6},{value:"needs-more-info",paraId:13,tocIndex:6},{value:" labels will be automatically removed.",paraId:13,tocIndex:6},{value:"The Ant Design team strongly encourages community involvement in Pull Request (PR), and provides the ",paraId:14,tocIndex:7},{value:"Contributor development maintenance guide",paraId:15,tocIndex:7},{value:" document for reference. It's important to follow certain standards when submitting a PR to ensure quality and effective communication. Additionally, the team uses GitHub Actions to require and review certain aspects of PRs to maintain code quality and ensure long-term project maintenance.",paraId:14,tocIndex:7},{value:"When you initiate a pull request (PR), the description content, including the changelog section, will be generated automatically through the PR template and needs to be filled in by the developer. The ",paraId:16,tocIndex:8},{value:"pr-open-check.yml",paraId:16,tocIndex:8},{value:" Job will check it, and if it is not filled in, the CI will remind you with a comment. Just like this:",paraId:16,tocIndex:8},{value:"If the issue referenced in the PR description has the ",paraId:17,tocIndex:8},{value:"\u{1F3B1} Collaborate PR only",paraId:17,tocIndex:8},{value:" label, the PR will be closed and leave a notification.",paraId:17,tocIndex:8},{value:"The ",paraId:18,tocIndex:8},{value:"verify-files-modify.yml",paraId:18,tocIndex:8},{value:" job will check the changes. If the changes include specific directories (such as ",paraId:18,tocIndex:8},{value:"./github/",paraId:18,tocIndex:8},{value:" and ",paraId:18,tocIndex:8},{value:"scripts/",paraId:18,tocIndex:8},{value:") or specific files (such as ",paraId:18,tocIndex:8},{value:"CHANGELOG.md",paraId:18,tocIndex:8},{value:"), community contributions will be rejected. The PR will be automatically closed and assigned to core members.",paraId:18,tocIndex:8},{value:"In the ",paraId:19,tocIndex:9},{value:"lint",paraId:19,tocIndex:9},{value:" job, the process always follows the procedure of performing a lint check on the code submitted by each developer.",paraId:19,tocIndex:9},{value:"For every pull request created, GitHub Actions will trigger the build process to ensure the documentation is correct. And PR does not affect the documentation or component demos. PR deployment is divided into multiple jobs, and the specific process is as follows:",paraId:20,tocIndex:10},{value:"First, the ",paraId:21,tocIndex:10},{value:"preview-start.yml",paraId:21,tocIndex:10},{value:'\uF0B7job is triggered to create a placeholder comment on the PR, informing the developer to start the preview build. This is what is often seen as "Preview Preparing..."',paraId:21,tocIndex:10},{value:"At the same time, the ",paraId:22,tocIndex:10},{value:"preview-build.yml",paraId:22,tocIndex:10},{value:" job performs the build operation on the site.",paraId:22,tocIndex:10},{value:"Finally, the ",paraId:22,tocIndex:10},{value:"preview-deploy.yml",paraId:22,tocIndex:10},{value:" job waits for ",paraId:22,tocIndex:10},{value:"preview-build.yml",paraId:22,tocIndex:10},{value:" to complete before performing the corresponding operations. If the build is successful, it will be deployed using ",paraId:22,tocIndex:10},{value:"Surge",paraId:22,tocIndex:10},{value:", and the deployment address follows the rule: ",paraId:22,tocIndex:10},{value:"https://preview-{PR-id}-ant-design.surge.sh",paraId:22,tocIndex:10},{value:". The placeholder image in the comment is updated with a success icon (clicking on the image will take you to the specific address), otherwise it is marked with a failure icon.",paraId:22,tocIndex:10},{value:"The ",paraId:23,tocIndex:11},{value:"size-limit.yml",paraId:23,tocIndex:11},{value:" job checks the size of the product resulting from the PR.",paraId:23,tocIndex:11},{value:"Recently, the team has added ChatGPT to GitHub Actions to perform AI-based code review. The specific job can be found in the ",paraId:23,tocIndex:11},{value:"chatgpt-cr.yml",paraId:23,tocIndex:11},{value:" file.",paraId:23,tocIndex:11},{value:"Unit testing is one of the most important components of component library quality assurance. Whenever any code is pushed, this CI is triggered to perform automated testing, including PRs initiated by developers or updates to the main branch.",paraId:24,tocIndex:12},{value:"The team wanted the packaged product to build properly after each code update. Ant Design has added the ",paraId:25,tocIndex:13},{value:"Dist Job",paraId:25,tocIndex:13},{value:" and ",paraId:25,tocIndex:13},{value:"Compile Job",paraId:25,tocIndex:13},{value:" in the test.yml file to ensure the repository can be built and packaged correctly.",paraId:25,tocIndex:13},{value:"you may notice that there are as many as 30 jobs related to testing only each time.",paraId:26,tocIndex:14},{value:"The team is very cautious about unit testing and needs to consider the running status of components on various major versions of React (usually versions 16, 17, and 18). If it is an update to the main branch, the running status of project build artifacts (usually ",paraId:27,tocIndex:14},{value:"dist",paraId:27,tocIndex:14},{value:", ",paraId:27,tocIndex:14},{value:"es",paraId:27,tocIndex:14},{value:", and ",paraId:27,tocIndex:14},{value:"lib",paraId:27,tocIndex:14},{value:") on three versions of React also needs to be considered. Currently, it is known that all components of Ant Design have over 4000 test cases. In order to further improve the efficiency of testing, we have also set up a distributed testing environment.",paraId:27,tocIndex:14},{value:"With the help of the ",paraId:28,tocIndex:14},{value:"Job matrix strategy",paraId:28,tocIndex:14},{value:", CI can configure multiple jobs to perform testing tasks at one time. ",paraId:28,tocIndex:14},{value:"Normal test",paraId:28,tocIndex:14},{value:" and ",paraId:28,tocIndex:14},{value:"Module test",paraId:28,tocIndex:14},{value:" are the jobs that Ant Design uses the matrix strategy to test.",paraId:28,tocIndex:14},{value:"The deployment and build process here is consistent with the PR preview deployment and build behavior mentioned earlier, except that the deployment target of the built artifacts is different.",paraId:29,tocIndex:15},{value:"The ",paraId:30,tocIndex:16},{value:"https://ant.design",paraId:30,tocIndex:16},{value:" official website uses the free ",paraId:30,tocIndex:16},{value:"GitHub Pages",paraId:30,tocIndex:16},{value:" function provided by GitHub. It uses the Actions ",paraId:30,tocIndex:16},{value:"Deploy to GitHub Pages",paraId:30,tocIndex:16},{value:" job to push the built documentation artifacts directly to the ",paraId:30,tocIndex:16},{value:"gh-pages",paraId:30,tocIndex:16},{value:" branch.",paraId:30,tocIndex:16},{value:"As we all know, the ",paraId:31,tocIndex:17},{value:"https://ant.design",paraId:31,tocIndex:17},{value:" official website always maintains the latest version. However, sometimes it is still necessary to refer to the documentation of a specific version. The ",paraId:31,tocIndex:17},{value:"Deploy to Surge",paraId:31,tocIndex:17},{value:" job is responsible for deploying the website to Surge after each new version is released, with the URL format ",paraId:31,tocIndex:17},{value:"https://ant-design-{major}-{minor}-{patch}.surge.sh",paraId:31,tocIndex:17},{value:", and posting the URL as a comment on each release commit.",paraId:31,tocIndex:17},{value:"In the previous sections, we introduced many scenarios used by Ant Design. However, there are still some Jobs that haven't been specifically introduced. Here are some additional details to supplement that.",paraId:32,tocIndex:18},{value:"To ensure that developers and community members are informed of relevant information as soon as possible, IM integration is implemented using the events provided by Action:",paraId:33,tocIndex:19},{value:"issue-notice",paraId:34,tocIndex:19},{value:" and ",paraId:34,tocIndex:19},{value:"discussion-notice",paraId:34,tocIndex:19},{value:" jobs send notifications to the DingTalk community group whenever an issue or discussion is created.",paraId:34,tocIndex:19},{value:"The ",paraId:35,tocIndex:19},{value:"release-helper.yml",paraId:35,tocIndex:19},{value:" CI file publishes the update log to the DingTalk community group whenever antd releases a version and creates a release.",paraId:35,tocIndex:19},{value:"Other jobs not mentioned here are waiting for you to explore and discover...",paraId:36,tocIndex:19},{value:"In the previous sections, we introduced many scenarios in which Ant Design uses GitHub Action. Why not try to apply it to your own project and improve production efficiency? Let's demonstrate this with a simple demo.",paraId:37,tocIndex:20},{value:"Create a Vite + React project by running the command ",paraId:38,tocIndex:21},{value:"pnpm create vite@latest my-react-app --template react-ts",paraId:38,tocIndex:21},{value:" in the command line.",paraId:38,tocIndex:21},{value:"Create a new file named ",paraId:39,tocIndex:22},{value:"ci.yml",paraId:39,tocIndex:22},{value:" in the ",paraId:39,tocIndex:22},{value:".github/workflows",paraId:39,tocIndex:22},{value:" folder located in the project's root directory with the following code:",paraId:39,tocIndex:22},{value:"name: CI\n\n# Set the event to pull request event and push event of the master branch\non:\n  push:\n    branches: [master]\n  pull_request:\n    branches: [master]\n\npermissions:\n  contents: write\n\njobs:\n  CI:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v4\n\n      - name: Setup bun\n        uses: oven-sh/setup-bun@v2\n        with:\n          node-version: 16\n\n      - name: Install pnpm\n        uses: pnpm/action-setup@v2\n        with:\n          version: 7.0.0\n\n      - name: Install dependencies\n        run: pnpm install\n\n      - name: lint\n        run: pnpm run lint\n\n      # The template does not contain test cases. If you need to use test cases, you can uncomment it\n      # - name: Test\n      #   run: pnpm run test\n\n      - name: Build\n        run: pnpm run build\n\n      - name: Upload build artifacts\n        uses: actions/upload-artifact@v3\n        with:\n          name: dist\n          path: ./dist\n\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v3\n        # Only deploy when the push event of the master branch is triggered\n        if: github.ref == 'refs/heads/master'\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./dist\n",paraId:40,tocIndex:22},{value:"The above workflow includes a CI job that will run ",paraId:41,tocIndex:22},{value:"lint",paraId:41,tocIndex:22},{value:", ",paraId:41,tocIndex:22},{value:"build",paraId:41,tocIndex:22},{value:", and ",paraId:41,tocIndex:22},{value:"deploy",paraId:41,tocIndex:22},{value:" in sequence when we push to the ",paraId:41,tocIndex:22},{value:"master",paraId:41,tocIndex:22},{value:" branch. The process is shown below:",paraId:41,tocIndex:22},{value:"To further optimize dependency installation speed, we can add pnpm caching. After that, we can initiate a pull request to verify the previous steps.",paraId:42,tocIndex:23},{value:"# ...\n- name: create pnpm-lock.yaml\n  run: pnpm install --frozen-lockfile --ignore-scripts\n\n- name: Get pnpm store directory\n  id: pnpm-cache\n  shell: bash\n  run: |\n    echo \"STORE_PATH=$(pnpm store path)\" >> $GITHUB_OUTPUT\n\n- name: Setup pnpm cache\n  uses: actions/cache@v4\n  with:\n    path: ${{ steps.pnpm-cache.outputs.STORE_PATH }}\n    key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}\n    restore-keys: |\n      ${{ runner.os }}-pnpm-store-\n\n# ...\n",paraId:43,tocIndex:23},{value:"The initiated pull request also triggered the CI job correctly, and our pnpm store has been cached. From now on, Every time CI triggered from now on, it will check the content of the ",paraId:44,tocIndex:23},{value:"pnpm-lock.yaml",paraId:44,tocIndex:23},{value:"\xa0file to determine whether to read the cache directly.",paraId:44,tocIndex:23},{value:"Regarding the ",paraId:45,tocIndex:23},{value:"Setup pnpm cache",paraId:45,tocIndex:23},{value:" step above, any cached items that have not been accessed within 7 days will be deleted. There is no limit to the number of caches that can be stored, but the total size of all caches in the storage repository is limited to 10 GB. For more information, please refer to ",paraId:45,tocIndex:23},{value:"Caching dependencies to speed up workflows",paraId:45,tocIndex:23},{value:".",paraId:45,tocIndex:23},{value:"I hope it has helped you gain a deeper understanding of Ant Design. You are also welcome to participate in discussions and contribute to the project at the ",paraId:46,tocIndex:24},{value:"Ant Design Discussion",paraId:46,tocIndex:24},{value:".",paraId:46,tocIndex:24}];}}]);