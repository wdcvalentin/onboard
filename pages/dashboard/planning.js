import SideBar from '../../components/layout/sidebar'
import {FiPlus} from "react-icons/fi";
import Image from "next/image";

export default function Planning() {
    return (
      <div className={"dashboard--section"}>
        <SideBar/>
        <div className={'dashboard--container'}>
          <div className={"dashboard--heading"}>
            <h2>Planning</h2>
          </div>
          <div className={"planning--wrapper"}>

          </div>
        </div>
      </div>
    )
}

