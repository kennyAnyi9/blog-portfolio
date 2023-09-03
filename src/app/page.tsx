import Image from "next/image";
import Layout from "./layout";
import Button from "./components/buttons/button-1";
import { RiCompassDiscoverLine } from "react-icons/ri";
import ContentItem from "./components/cards/card-1";
import ContentItem2 from "./components/cards/card-2";
import { contentItems } from "./components/content/array-1";
import { contentItems2 } from "./components/content/array-2";

export default function Home() {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col  items-center space-y-10 mt-5">
        <div className="w-11/12 lg:w-3/6 h-fit p-5 rounded-lg bg-background/70 backdrop-blur-lg ring-1 ring-gray-500">
          <h1
            className="text-center  text-2xl md:text-3xl font-bold 
                    text-gray-900
                    "
          >
            Blog.Bureau
          </h1>
          <p className="flex text-lg mt-10 flex-col lg:px-28 text-center text-gray-600  ">
            Unleash the power of books through powerful summaries, life changing
            insights & personal reflections.
          </p>

          <div className="flex items-center flex-col ">
            <Button text="Discover more" isPrimary={true} />
            <Button text="Uncover Insights" isPrimary={false} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 gap-5 lg:w-3/6 ">
          {contentItems.map((item, index) => (
            <ContentItem
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
        <div className="w-11/12 lg:w-3/6 h-fit p-5 rounded-lg bg-background/70 backdrop-blur-lg ring-1 ring-gray-500">
          <h1
            className="text-center lg:px-10  text-2xl md:text-3xl font-bold 
                    text-gray-900
                    "
          >
            Powerful Book Summaries & Personal Reflections
          </h1>
          <p className="flex text-lg mt-10 flex-col lg:px-12 text-center text-gray-600  ">
            Empowering insights in concise form. Unleash the potential of
            powerful book summaries and personal reflections. Discover a wealth
            of knowledge distilled into bite-sized wisdom, ready to inspire and
            transform your journey of personal growth and development
          </p>
        </div>
        <div className="grid grid-cols-1 w-11/12 gap-5 lg:w-3/6 ">
          {contentItems2.map((item, index) => (
            <ContentItem2
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
