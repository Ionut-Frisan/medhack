
const Details = (obj, titleKey) => {
    return (
        <div className={'details-sections'}>
            {titleKey && obj[titleKey] && <h2>{obj[titleKey]}</h2>}
            {Object.keys(obj).map(key => (
                <span><b>{key}</b></span>
            ))}
        </div>
    )
};

export default Details;