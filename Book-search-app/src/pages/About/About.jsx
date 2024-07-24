import React from 'react';
import { useEffect } from 'react';
import "./About.css";
import aboutImg from "../../images/about_image.jpg";

const About = () => {
  useEffect(() => {
    const aboutElement = document.querySelector('.about'); 

    if (aboutElement) {
      const yOffset = aboutElement.offsetTop; // Lấy vị trí y của phần tử
      window.scrollTo({ top: yOffset, behavior: 'smooth' }); // Cuộn mượt mà
    }
  }, []); 
  return (
    <section className='about'>
      <div className='container'>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-30 ls-1'>JOB SEARCH</h2>
            <hr style={{ padding: '0px', marginBottom: '20px', height: '2px', marginTop: '0px' }} />
            <p className='fs-17 fw-7'>Cổng thông tin việc làm cho sinh viên</p>
            <p className='fs-17'>Job Collection là dự án môn học tâm huyết, được thiết kế dành cho sinh viên và những người mới bắt đầu sự nghiệp. Tôi hiểu rằng việc tìm kiếm công việc đầu đời là một thử thách lớn, và trang web này ở đây để giúp bạn vượt qua nó.</p>
            <p className='fs-17'><strong>Cơ hội việc làm đa dạng:</strong> Trang web tập trung vào các công việc phù hợp với đa dạng cấp bậc và loại hình, bao gồm các vị trí thực tập, bán thời gian, và toàn thời gian.</p>
            <p className='fs-17'><strong>Thông tin đầy đủ và chính xác:</strong> Mỗi tin tuyển dụng đều được chúng tôi kiểm duyệt kỹ lưỡng, đảm bảo cung cấp thông tin đầy đủ, chính xác và cập nhật nhất.</p>
            <p className='fs-17'><strong>Giao diện thân thiện:</strong> Giao diện website này được thiết kế đơn giản, dễ sử dụng, giúp bạn dễ dàng tìm kiếm và ứng tuyển vào các công việc phù hợp.</p>
            <p className='fs-17'><strong>Nếu có góp ý gì với tác giả về trang web, xin hãy vui lòng điền đánh giá vào form sau: 
              <a style = {{color: 'violet'}}className='fs-17' target='_blank' rel="noopener noreferrer" href = "https://docs.google.com/forms/d/e/1FAIpQLSdf8xkE3HLtZFR6_cu4Tmq4XF3X-0cNBNSkx-rDGDgH5Fq64w/viewform?usp=sf_link"> Đóng góp ý kiến</a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
