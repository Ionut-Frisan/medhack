import useClassName from "../../hooks/useClassName.js";
import {useMemo} from "react";
import {sizes, variants} from "../../utils/constants.js";
import './button.scss';

const medButton = ({
                       rounded = true,
                       // outlined = false,
                       size = 'large',
                       length = 'flexible',
                       loading = false,
                       variant = 'secondary',
                       label = 'ana are mere',
                       icon,
                       iconPosition = 'start',
                       ...props
                   }) => {

    const baseClass = 'med-button';
    const hasIcon = useMemo(() => !!icon, [icon]);

    const sizeClass = useMemo(() => sizes.includes(size)
            ? `${baseClass}__${size}`
            : `${baseClass}__medium`,
        [size]);
    const variantClass = useMemo(() => variants.includes(variant)
            ? `${baseClass}__${variant}`
            : `${baseClass}__primary`,
        [variant]);

    const classObj = [
        baseClass,
        sizeClass,
        variantClass,
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
        <button {...computedProps}>{label}</button>
    )
}

export default medButton;