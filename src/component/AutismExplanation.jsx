import { FaArrowRight } from "react-icons/fa6";

const AutismExplanation = () => {
  return (
    <section id="autism-info" className="mx-auto px-4 py-[50px] md:px-[2.5rem] bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-poppins text-[30px] font-bold mb-4 text-center">
          Understand <span className="text-[#FFC107]">Autism</span>
        </h1>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="font-poppins text-justify">
            <p className="mb-4">
              Autism, or Autism Spectrum Disorder (ASD), refers to a broad range of conditions 
              characterized by challenges with social skills, repetitive behaviors, speech, and 
              nonverbal communication.
            </p>
            <p className="mb-4">
              Autism is a spectrum disorder, meaning that it affects each person differently 
              and with varying degrees of severity. While autistic people share certain difficulties, 
              their condition will affect them in unique ways.
            </p>
            <p className="mb-4">
              Some of the strengths many autistic individuals possess include:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Ability to focus intensely on subjects of interest</li>
              <li>Strong attention to detail and pattern recognition</li>
              <li>Creative and innovative thinking approaches</li>
              <li>Honesty and loyalty in relationships</li>
            </ul>
            <button className="mt-4 flex items-center gap-2 text-[#FFC107] font-poppins font-medium hover:underline">
              Learn more about autism <FaArrowRight />
            </button>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-6 border-l-4 border-[#FFC107]">
            <h3 className="font-poppins font-bold text-lg mb-3">Key Facts About Autism</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#FFC107] mr-2">•</span>
                <span>Approximately 1 in 54 children has been identified with autism</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFC107] mr-2">•</span>
                <span>Autism is about 4 times more common in boys than girls</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFC107] mr-2">•</span>
                <span>Autism can be diagnosed as early as 18 months</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFC107] mr-2">•</span>
                <span>There is no cure for autism, but therapies and supports can help</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FFC107] mr-2">•</span>
                <span>Many autistic people lead fulfilling, independent lives with proper support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutismExplanation;