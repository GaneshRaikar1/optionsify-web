import Slider from "react-slick";
// import { testimonialData } from "../../data/testimonies";

const Testimonial = ({ testimonials }) => {

	// slick setting
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<>
			<div className="testimonial__area pt-50 pb-115 fix">
				<div className="container">
					<div className="testimonial__inner p-relative pb-110">
						<div className="row">
							<div className="col-xxl-12">
								<Slider {...settings} className="testimonial__slider wow fadeInUp" data-wow-delay=".5s">
									{
										testimonials.map((testimonial, index) => {
											return <div key={index} className="testimonial__item white-bg">
												<div className="testimonial__person d-flex mb-20">
													<div className="testimonial__avater">
														<img src={testimonial.img} alt="" />
													</div>
													<div className="testimonial__info ml-15">
														<h5>{testimonial.name}</h5>
														<span>{testimonial.about}</span>
													</div>
												</div>
												<div className="testimonial__text">
													<p>{testimonial.desc}</p>
												</div>
											</div>
										})
									}
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;