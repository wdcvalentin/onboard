import { FiPlus, FiMinus } from "react-icons/fi";

export default function Faq() {
  return (
    <div className={"faq--section"}>
      <div className={"faq--container"}>
        <div className={"faq--heading text--center"}>
          <h3>FAQ</h3>
          <h2>Have a question? Check below to see if we already have an answer!</h2>
        </div>
        <div className={"faq--card"}>
          <div className={"flex flex--row ai--center jc--flex-start"}>
           <FiPlus />
           <p>What is Onboard?</p>
         </div>
        </div>
        <div className={"faq--card"}>
          <div className={"flex flex--row ai--center jc--flex-start"}>
            <FiPlus />
            <p>How an interface can help you enjoy you arrival at a new company</p>
          </div>
        </div>
        <div className={"faq--card"}>
          <div className={"flex flex--row ai--center jc--flex-start"}>
            <FiMinus />
            <p>How it works?</p>
          </div>
          <div className={"answer active"}>
            <p className={"ml--48"}>You can check our tutorials in resources tab in the menu.</p>
          </div>
        </div>
      </div>
    </div>

  )

}

