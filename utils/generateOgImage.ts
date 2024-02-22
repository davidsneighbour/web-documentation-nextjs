const html = `
<html>
  <head>
    <style>
      body {
        width: 1128px;
        height: 600px;
      }
    </style>

    <!-- Include external CSS, JavaScript or Fonts! -->
    <script src="https://cdn.tailwindcss.com"></script>

    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              vulcan: {
                50: "#404551",
                100: "#363b47",
                200: "#2c313d",
                300: "#222733",
                400: "#181d29",
                500: "#0e131f",
                600: "#040915",
                700: "#00000b",
                800: "#000001",
                900: "#000000",
              },
              "teal": {
                "50": "#47f4fd",
                "100": "#3deaf3",
                "200": "#33e0e9",
                "300": "#29d6df",
                "400": "#1fccd5",
                "500": "#15c2cb",
                "600": "#0bb8c1",
                "700": "#01aeb7",
                "800": "#00a4ad",
                "900": "#009aa3"
              },
              "whisper": {
                "50": "#ffffff",
                "100": "#ffffff",
                "200": "#ffffff",
                "300": "#ffffff",
                "400": "#fdf9ff",
                "500": "#f3eff5",
                "600": "#e9e5eb",
                "700": "#dfdbe1",
                "800": "#d5d1d7",
                "900": "#cbc7cd"
              },
            },
          },
        },
      };
    </script>
  </head>
  <body>
    <div
      class="bg-vulcan-500 relative"
      style="font-size: 20px; width: 1128px; height: 600px"
    >
      <div class="p-16 flex flex-col justify-center" style="height: calc(100% - 2rem)">
        <header class="text-whisper-500 flex items-center mb-16">
          <svg class="h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1201 1201" enable-background="new 0 0 1201 1201"><rect x="1" y="1" display="none" fill="none" stroke="#01AEB7" stroke-width="50" stroke-miterlimit="10" width="1200" height="1200"></rect><g enable-background="new "><path fill="currentcolor" d="M173.4,576.8H96.9V214.5h135.2v85.2h-58.7v52.8H228v81.9h-54.7V576.8z"></path><path fill="currentcolor" d="M463.3,576.8h-82.7l-37.8-129.1c-0.4-2.2-1-5.1-1.9-8.7c-0.9-3.6-2-7.9-3.4-12.9l0.6,23.9v126.7h-76.1 V214.5h78.3c34.5,0,60.3,8.7,77.4,26.1c21.8,22.2,32.7,53.8,32.7,94.8c0,43.8-14.6,74.1-43.9,90.8L463.3,576.8z M338.3,382.3h5.1 c8.8,0,16.1-4.3,22-12.9c5.9-8.6,8.8-19.6,8.8-32.9c0-27.1-11.1-40.6-33.2-40.6h-2.8V382.3z"></path><path fill="currentcolor" d="M693.2,396.8c0,55.2-9.8,100.1-29.5,134.7c-19.6,34.4-45.1,51.6-76.5,51.6c-27.9,0-51.8-13.2-71.7-39.7 c-25.1-33.5-37.6-83.7-37.6-150.7c0-64.1,13.1-113.2,39.3-147.1c19.4-25.2,42.5-37.8,69.2-37.8c32.7,0,58.6,17.1,78,51.2 C683.5,293.2,693.2,339.1,693.2,396.8z M613.7,397.5c0-65.6-9.1-98.3-27.2-98.3c-9.1,0-16.3,8.6-21.7,25.8 c-5.3,16-7.9,39.4-7.9,70.4c0,30.5,2.5,54.2,7.4,71c5,16.8,11.8,25.2,20.6,25.2c9.1,0,16-8.3,20.9-24.9 C611.1,450.2,613.7,427.1,613.7,397.5z"></path><path fill="currentcolor" d="M725.8,576.8V214.5h73l38.3,127.2c2.1,7.5,4.4,16.1,7.1,25.8c2.6,9.7,5.5,20.9,8.7,33.6l7.9,31.9 c-2.8-31.4-5-58.4-6.4-80.7c-1.5-22.4-2.2-41.1-2.2-56.3v-81.4h73v362.4h-73l-38.5-133.3c-4-14.2-7.7-27.6-10.9-40 c-3.2-12.4-6.1-24.3-8.5-35.6c1.6,25.5,2.8,47.7,3.5,66.7c0.7,18.9,1.1,35.5,1.1,49.8v92.5H725.8z"></path><path fill="currentcolor" d="M1063.8,576.8h-76.5V301.3h-42.2v-86.8h162.6v86.8h-43.9V576.8z"></path></g><g enable-background="new "><path fill="currentcolor" d="M123,657.8h35.8l27.4,133.7c3.4,16.7,6.4,33.4,9.2,50.2c2.7,16.8,5.3,34.4,7.5,52.7 c0.3-2.4,0.5-4.3,0.6-5.6c0.1-1.3,0.3-2.3,0.4-2.9l5.8-37.6l5.2-35.7l4.6-23.6L244,657.8h36.2l28.6,327.7h-40l-7-111.2 c-0.3-5.7-0.5-10.5-0.7-14.6c-0.2-4.1-0.3-7.5-0.3-10.2l-1.8-43.9l-1-40.3c0-0.3,0-0.9-0.1-1.8c-0.1-0.9-0.2-2.2-0.3-3.7l-1,6.6 c-1.1,7.8-2,14.6-2.9,20.4c-0.9,5.8-1.6,10.7-2.3,14.6l-5.2,29.9l-2,11.2l-26.2,143.1h-28.2L165.1,862c-3.4-16.3-6.3-32.8-9-49.6 c-2.6-16.8-5-34.3-7.1-52.7l-12.1,225.8H97.5L123,657.8z"></path><path fill="currentcolor" d="M395.5,657.8h32.6l66.6,327.7h-41.5l-11.7-63.9H380l-11.9,63.9h-40.2L395.5,657.8z M435.5,887.5l-9.3-52.2 c-6.2-35.5-11.2-73.4-15.1-113.8c-1.9,19.7-4.3,39.6-7.2,59.8c-3,20.2-6.4,41.6-10.5,64.2l-7.6,42H435.5z"></path><path fill="currentcolor" d="M495.7,657.8h136.2v38.6H585v289.1H544V696.4h-48.3V657.8z"></path><path fill="currentcolor" d="M638.1,657.8h136.2v38.6h-46.9v289.1h-41.1V696.4h-48.3V657.8z"></path><path fill="currentcolor" d="M805.4,657.8h111.3v37.4h-69.4V799h61.6v37.4h-61.6v111.9h69.4v37.4H805.4V657.8z"></path><path fill="currentcolor" d="M962.9,657.8h55.1c22.8,0,39.8,5.7,50.9,17.2c14.1,14.9,21.1,37.6,21.1,68.1c0,23.5-3.7,42.3-11.2,56.6 c-7.4,14.2-18.1,23-31.9,26.4l57.2,159.4h-42.5l-57-160.5v160.5h-41.9V657.8z M1004.8,803c16.2,0,27.7-4,34.4-11.9 c6.7-7.9,10.1-21.3,10.1-40.1c0-10.2-0.7-18.9-2.1-26.1c-1.4-7.2-3.6-13.1-6.6-17.6c-3-4.5-6.9-7.9-11.7-10 c-4.8-2.1-10.4-3.2-17-3.2h-7V803z"></path></g><rect x="97" y="93.9" fill="currentcolor" width="169.7" height="43"></rect><rect x="351.9" y="93.9" fill="currentcolor" width="169.7" height="43"></rect><rect x="609.8" y="93.9" fill="currentcolor" width="169.7" height="43"></rect><rect x="97" y="1060.7" fill="currentcolor" width="169.7" height="43"></rect><rect x="351.9" y="1060.7" fill="currentcolor" width="169.7" height="43"></rect><rect x="609.8" y="1060.7" fill="currentcolor" width="169.7" height="43"></rect></svg>
        </header>

        <section class="space-y-8">
          <h1 class="text-whisper-500 text-6xl font-bold mt-16">
            {title}
          </h1>

          <p class="text-whisper-900 text-2xl">
            {description}
          </p>

          <div class="uppercase text-base inline-block px-4 py-3 border border-transparent rounded font-medium shadow-sm bg-teal-500">
            Docs
          </div>
        </section>
      </div>  

      <div class="h-8 bg-teal-300 w-full absolute bottom-0"></div>
    </div>
    </div>
  </body>
</html>
`;

// import nodeHtmlToImage from "node-html-to-image";
import { existsSync } from "fs";
import { join } from "path";

export default async function generateOgImage(
  title: string,
  description: string
) {
  if (!title) {
    return;
  }

  // Check if the image already exists
  const fileName = `${title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/\//g, "-")
    .replace(/\./g, "-")}.png`;
  const filePath = `/assets/og/${fileName}`;
  const absImgPath = join(__dirname, `../../../public${filePath}`);
  if (existsSync(absImgPath)) {
    return filePath;
  }

  // const parsedHtml = html
  //   .replace(`{title}`, title)
  //   .replace(`{description}`, description || "");

  // try {
  //   await nodeHtmlToImage({
  //     output: absImgPath,
  //     html: parsedHtml,
  //   });
  //   return filePath;
  // } catch (error) {
  //   return;
  // }

  return;
}
