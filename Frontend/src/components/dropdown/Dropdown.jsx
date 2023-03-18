import {useState} from "react";
import DynamicComponent from "../dynamic-component/DynamicComponent.jsx";
import Link from "../router/Link.jsx";
import {FaCaretDown} from "react-icons/fa";
import useClassName from "../../hooks/useClassName.js";
import './Dropdown.scss';

const Dropdown = ({options = [], trigger = FaCaretDown, triggerProps}) => {
    const [isOpen, setIsOpen] = useState(false);
    const getElementFromOptions = () => {
        const computedOptions = options.map((option, index) => {
            if (option.type === 'link') {
                return (
                    <li key={index}><Link to={option.to}>{option.label}</Link></li>
                )
            }
            return <li key={index}><span onClick={option.action}>{option.label}</span></li>
        })
        return (
            <ul className={`dropdown-options${isOpen ? '' : ' hidden'}`}>
                {computedOptions}
            </ul>
        )
    };

    const triggerClass = useClassName([
        triggerProps?.className || '',
        {
            'arrow': trigger === FaCaretDown,
            'closed': !isOpen,
        }
    ])

    return (
        <div className={'dropdown'}>
            <DynamicComponent is={trigger}
                              props={{
                              ...triggerProps, 
                              className: triggerClass, 
                              onClick: () => setIsOpen(!isOpen)}}
                              />
            {getElementFromOptions()}
        </div>
    )
}

export default Dropdown;