import Card from "@/components/Card";
import "./styles.css"
export default function HomePageLoader() {

    return (
      <div className="flex justify-center items-center w-full h-full">
        {/* <Card className="border-2 border-black"> */}
          {/* <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div> */}
          <div className="shapes-8"></div>
        {/* </Card> */}
      </div>
    );
  }