import online_groceries from "../../components/Assets/Online Groceries-amico 1.png";
import Button from "../../components/Button/Button";
import Button1 from "../../components/Button/Button1";
import { NavLink } from "react-router-dom";

const Pages1 = () => {
  return (
    <section className='w-10/12 mx-auto mt-6 gap-4 md:w-7/12 md:mx-auto md:flex  md:flex-col  md:justify-center md:py-0 md:gap-2'>
      {/* Hero Image */}
      <div className='flex items-center justify-center'>
        <img src={online_groceries} alt='' className='w-72 h-288' />
      </div>
      {/* Three dotted cirles */}
      <div className='flex items-center justify-start gap-2 mb-7 '>
        <div className='w-3 h-3 rounded-full bg-[#f6613f]'></div>
        <div className='w-3 h-3 rounded-full bg-[#d1d5db]'></div>
        <div className='w-3 h-3 rounded-full bg-[#d1d5db]'></div>
      </div>

      {/*Screen Splash Page 1 Texts */}
      <div className='flex flex-col gap-5 mb-12  md:mb-0'>
        <h2 className='w-80 h-20 font-semibold text-3xl text-[#1f2937] md:w-full'>
          Wide range of Food Categories & more
        </h2>
        <p className='w-80 h-28 text-base font-normal text-[#4B5563] md:w-full'>
          When you're ready to place an order, browse through our comprehensive
          choice of restaurants and dishes, then add the foods you want to your
          cart and check out. It's that simple!
        </p>
      </div>

      <div className='flex items-center justify-center gap-2 w-full mb-5'>
        {/* Skip Button */}
        <NavLink to='./authpage1'>
          {" "}
          <Button1 name='Skip' />
        </NavLink>

        {/*Next Button*/}
        <NavLink to='/Page2'>
          <Button name='Next' />
        </NavLink>
      </div>
    </section>
  );
};

export default Pages1;
