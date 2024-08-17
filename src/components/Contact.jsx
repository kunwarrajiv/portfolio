import { CONTACTDETAILS } from "../constants"

const Contact = () => {
  return (
    <div className=" border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">
        Get in Touch
      </h1>
      <div className="text-center tracking-tighter">
        <p className=" my-4 ">
            {CONTACTDETAILS.address}
        </p>
        <p className=" my-4 ">
            {CONTACTDETAILS.phoneNo}
        </p>
        <a href="~" className=" border-b ">
            {CONTACTDETAILS.email}
        </a>
      </div>
    </div>
  )
}

export default Contact
