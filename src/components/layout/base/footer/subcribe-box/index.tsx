import SubcribeForm from './form'
import Policies from './policies'
import Socials from './socials'

const SubcribeBox = () => {
  return (
    <div
      className="w-full flex flex-col gap-2 relative beter:hidden beter:w-1/2 beter:absolute beter:h-2/5 beter:pointer-events-none beter:border-primary-02 before:top-3 before:-right-5 before:border-t-2 before:border-r-2 before:rounded-tr-[2.5rem] after:bottom-3 after:-left-5 after:border-l after:border-b after:rounded-bl-[2.5rem] md:beter:block lg:gap-6 lg:before:-right-8 lg:after:-left-8"
      data-aos="fade"
      data-aos-delay="50"
    >
      <Socials />
      <SubcribeForm />
      <Policies />
    </div>
  )
}

export default SubcribeBox
