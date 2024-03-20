
const SingleBrand = ({ image }) => {
    return (
        <>
            <div className="brand__thumb">
                <img src={`assets/img/brand/brand-${image}.jpeg`} alt="" />
            </div>
        </>
    );
};

export default SingleBrand;