import React from 'react';
import '../../features/Products/Products.css'
import imgStar from '../../assets/Star.png'
import imgStarGrey from '../../assets/Star-grey.png'
import imgRev from '../../assets/Rev.png'
import imgY from '../../assets/starY.png'

const Reviews = () => {
  return (
    <div className={'container'} style={{marginTop: '100px'}}>
      <div className="frame-14">
        <div className="overlap-group">
          <div className="view">
            <div className="div-3">
              <div className="text-wrapper-20">4.9</div>
              <img className="img-2" src={imgStar} alt={'star'}/>
              <img className="img-2" src={imgStar} alt={'star'}/>
              <img className="img-2" src={imgStar} alt={'star'}/>
              <img className="img-2" src={imgStar} alt={'star'}/>
              <img className="img-2" src={imgStar} alt={'star'}/>
            </div>
            <div className="text-wrapper-21">60 отзывов</div>
          </div>
          <div className="frame-15">
            <div className="frame-16">
              <img className="img" src={imgRev} alt={'rev'}/>
              <div className="text-wrapper-3">Написать отзыв</div>
            </div>
            <div className="frame-17">
              <div className="frame-18">
                <div className="frame-19">
                  <div className="frame-10">
                    <div className="ellipse"></div>
                    <div className="frame-20">
                      <div className="text-wrapper-22">Сайкал</div>
                      <div className="text-wrapper-9">17 мая 2023, 20:46</div>
                    </div>
                  </div>
                  <img className="img-2" src={imgY} alt={'star'}/>
                  <img className="img-2" src={imgY} alt={'star'}/>
                  <img className="img-2" src={imgY} alt={'star'}/>
                  <img className="img-2" src={imgY} alt={'star'}/>
                  <img className="img-2" src={imgStarGrey} alt={'star'}/>
                </div>
                <div className="text-wrapper-23">Отлично шьёт, покупкой довольна.</div>
                <div className="text-wrapper-24">Пожаловаться на отзыв</div>
              </div>
              <div className="frame-18">
                <div className="frame-19">
                  <div className="frame-10">
                    <div className="ellipse"></div>
                    <div className="frame-20">
                      <div className="text-wrapper-22">Сайкал</div>
                      <div className="text-wrapper-9">17 мая 2023, 20:46</div>
                    </div>
                  </div>
                  <img className="img-2" src={imgY} alt={'star'}/>
                  <img className="img-2" src={imgY} alt={'star'}/>
                  <img className="img-2" src={imgY} alt={'star'}/>
                  <img className="img-2" src={imgY} alt={'star'}/>
                  <img className="img-2" src={imgStarGrey} alt={'star'}/>
                </div>
                <p className="text-wrapper-23">
                  Машинка пришла целая в заводской упаковки. Стирает мелкие вещи, полоскание в ней не очень
                  понравилось и отжим слабый. По сути отжим в ней это просто кружение в этом барабане для отдима.
                </p>
                <div className="text-wrapper-24">Пожаловаться на отзыв</div>
              </div>
              <div className="frame-18">
                <div className="frame-19">
                  <div className="frame-10">
                    <div className="ellipse"></div>
                    <div className="frame-20">
                      <div className="text-wrapper-22">Сайкал</div>
                      <div className="text-wrapper-9">17 мая 2023, 20:46</div>
                    </div>
                  </div>
                  <img className="img-2" src={imgY} alt={'star'}/>
                  <img className="img-2" src={imgY} alt={'star'}/>
                  <img className="img-2" src={imgY} alt={'star'}/>
                  <img className="img-2" src={imgY} alt={'star'}/>
                  <img className="img-2" src={imgStarGrey} alt={'star'}/>
                </div>
                <div className="text-wrapper-23">Отлично шьёт, покупкой довольна.</div>
                <div className="text-wrapper-24">Пожаловаться на отзыв</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-21">
          <div className="text-wrapper-25">Отзывы</div>
          <div className="rectangle"></div>
        </div>
        <div className="primary-btn">
          <div className="text-wrapper-16">Смотреть все отзывы</div>
        </div>
      </div>
    </div>

  );
};

export default Reviews;