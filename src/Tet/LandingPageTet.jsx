import React from "react";

function LandingPageTet() {
    const [fortune, setFortune] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [isShowFortune, setIsShowFortune] = React.useState(false);

    const handleOpenModal = () => {
        setIsLoading(true);
        const arrFortunes = [
            "Đại Cát: Năm mới thịnh vượng, vạn sự như ý, phúc lộc đầy nhà.",
            "Tiểu Cát: Có lộc nhỏ, may mắn vừa đủ, công việc suôn sẻ.",
            "Bình An: Gia đạo yên vui, sức khỏe dồi dào, tâm an vạn sự an.",
            "Thành Công: Nỗ lực được đền đáp, công danh thăng tiến, tài vận hanh thông.",
            "Khởi Đầu Mới: Một cơ hội mới đang đến, hãy sẵn sàng nắm bắt!",
            "Lộc Tài: Tiền bạc rủng rỉnh, tài chính khởi sắc, đầu tư có lợi.",
            "Đào Hoa: Tình duyên vượng phát, nhân duyên đẹp, có tin vui bất ngờ.",
            "Sức Khỏe: Cơ thể tràn đầy năng lượng, sức khỏe ổn định, tránh căng thẳng.",
            "Gia Đạo: Hòa thuận, sum vầy, tình cảm gia đình bền chặt.",
            "Công Danh: Được quý nhân phù trợ, sự nghiệp phát triển tốt.",
            "Học Hành: Đỗ đạt, tiếp thu nhanh, có tiến bộ rõ rệt.",
            // "Cảnh Giác: Hãy cẩn trọng với các quyết định lớn, đừng chủ quan.",
            "Kiên Nhẫn: Không vội vàng, chờ đúng thời điểm để hành động.",
            "Đột Phá: Một thay đổi lớn có thể xảy ra, hãy mạnh dạn tiến bước.",
            "Nhẫn Nhịn: Mọi chuyện sẽ tốt đẹp nếu bạn giữ bình tĩnh và kiên trì.",
            "Tiến Thủ: Chủ động nắm bắt cơ hội, không ngừng học hỏi để phát triển.",
            "Hòa Hợp: Xây dựng mối quan hệ tốt, tránh tranh cãi, giữ hòa khí.",
            "Vượt Khó: Khó khăn sẽ qua, kiên trì sẽ mang đến thành công.",
            "Sáng Suốt: Lắng nghe trực giác và lý trí, tránh bị ảnh hưởng bởi tiêu cực.",
            "Hạnh Phúc: Tận hưởng những điều tốt đẹp trong cuộc sống, biết ơn và yêu thương."
        ];
        const randomIndex = Math.floor(Math.random() * arrFortunes.length);
        setFortune(arrFortunes[randomIndex]);
    };

    React.useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false);
                setIsShowFortune(true);
            }, 1500);
        }
    }, [isLoading]);


    return (
        <div className="d-flex wrap-content">
            <nav id="navbar-custom" class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div class="container-fluid">
                    <h3 className="color-yellow">Tết 2025</h3>
                </div>
            </nav>
            <div class="w-100 wrap-img">
                <img class="img-top" src="img/Red Neon Chinese New Year  Instagram Post - Made with PosterMyWall.jpg" alt="" />
            </div>
            <div class="cast-coins d-flex align-items-center">
                <h3>Gieo quẻ đầu năm hội bớt vui tính</h3>
                <div class="wrap-img d-flex justify-content-center">
                    <img src="img/hopgieoque01.png" alt="" />
                    <div class="wrap-span">
                        <span>Gieo quẻ đầu năm</span>
                    </div>
                </div>
                <button type="button" class="btn btn-danger btn-custom mt-2 mb-2" data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={handleOpenModal} disabled={isShowFortune}>Ấn vào đây</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">RỒNG RẮN LÊN MÂY NÀOOO !!!</h5>
                            </div>
                            <div class="modal-body">
                                {
                                    isLoading
                                        ? (
                                            <div className="d-flex justify-content-center">
                                                <div className="spinner-border text-danger me-3" role="status"></div>
                                                <h3 className="">Đợi chút</h3>
                                            </div>
                                        )
                                        : (
                                            <h3>{fortune}</h3>
                                        )
                                }
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wish">
                <i>
                    <h4>Chúc mọi người năm mới thật nhiều sức khỏe, hạnh phúc bình an, cầu được ước thấy, làm gì cũng thuận lợi !!!</h4>
                </i>
                <i>
                    <h4>Sống khỏe, sống chất, tươi rói cả năm !!!</h4>
                </i>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 h-100" src="img/431733672_2937695323039273_4976203932101197343_n.jpg"
                            alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 h-100" src="img/432966443_391976053468052_8980932044669395112_n.jpg"
                            alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 h-100" src="img/434666713_1400684074416952_6914388025796590004_n.jpg"
                            alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 h-100" src="img/471864966_967843375304775_8482685557002565463_n.jpg"
                            alt="Fourth slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 h-100" src="img/473993749_1999846450528781_1676604043012857590_n.jpg"
                            alt="Fifth slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 h-100" src="img/474114104_821735886751899_5135320496182374024_n.jpg"
                            alt="Fifth slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 h-100" src="img/474261366_1314889043037473_8640631947782138296_n.jpg"
                            alt="Fifth slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    );
}

export default LandingPageTet;
