import useClassName from "../../hooks/useClassName.js";
import {useMemo} from "react";
import DynamicComponent from "../dynamic-component/DynamicComponent.jsx";
import {justifies, sizes, variants} from "../../utils/constants.js";
import './MedButton.scss';

const medButton = ({
                       rounded = true,
                       // outlined = false,
                       size = 'large', // small, medium, large
                       length = '', // flexible
                       loading = false,
                       variant = 'primary', // primary, secondary, success, danger, info, warning, plain
                       label = '',
                       startIcon,
                       endIcon,
                       justify = 'center',
                       customClass = '',
                       ...props
                   }) => {

    const baseClass = 'med-button';

    const sizeClass = useMemo(() => sizes.includes(size)
            ? `${baseClass}__${size}`
            : `${baseClass}__medium`,
        [size]);

    const variantClass = useMemo(() => variants.includes(variant)
            ? `${baseClass}__${variant}`
            : `${baseClass}__primary`,
        [variant]);

    const justifyClass = useMemo(() => justifies.includes(justify)
            ? `${baseClass}__${justify}`
            : `${baseClass}__center`,
        [variant]);

    const classObj = [
        baseClass,
        sizeClass,
        variantClass,
        justifyClass,
        customClass,
        {
            [`${baseClass}__flexible`]: length === "flexible",
            [`${baseClass}__rounded`]: rounded,
            [`${baseClass}__loading`]: loading,
            // [`${baseClass}__outlined`]: outlined,
        },
    ];
    const classes = useClassName(classObj);

    const computedProps = {
        className: classes,
        ...props,
    }

    return (
        <button {...computedProps}>
            <DynamicComponent is={startIcon}/>
            {label}
            <DynamicComponent is={endIcon}/>
        </button>
    )
}

export default medButton;