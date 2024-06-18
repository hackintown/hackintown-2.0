import React from "react";
import GenreStyle from "./Genre.module.css";

const Genre = () => {
  return (
    <section className={GenreStyle.genre_sec}>
      <div className="container">
        <div className={GenreStyle.genre_wrap}>
          <div className={GenreStyle.genre_info}>
            <img src="./images/camp-stat-icon.png" alt="brand_work_icon" />
            <div className={GenreStyle.info_wrap}>
              <h2>PLAN YOUR CONTENT STRATEGY</h2>
            </div>
          </div>
          <div className={GenreStyle.genre_info}>
            <img src="./images/influ-search-icon.png" alt="brand_work_icon" />
            <div className={GenreStyle.info_wrap}>
              <h2>DISCOVER INFLUENCERS</h2>
            </div>
          </div>
          <div className={GenreStyle.genre_info}>
            <img src="./images/hire-influ-icon.png" alt="brand_work_icon" />
            <div className={GenreStyle.info_wrap}>
              <h2>HIRE THE BEST INFLUENCERS</h2>
            </div>
          </div>
        </div>
        <div className={GenreStyle.genres_supp_block}>
          <div className={GenreStyle.heading}>
            <h2>Genres We Support</h2>
          </div>
          <div className={GenreStyle.bc_row}>
            <div className={GenreStyle.gn_grid}>
              <div className={GenreStyle.genres_supp_item}>
                <figure>
                  <img src="./images/beauty-icon.png" alt="Influencers" />
                </figure>
                <div className={GenreStyle.idn_img_txt}>
                  <span>Fashion &amp; Beauty</span>
                </div>
              </div>
            </div>
            <div className={GenreStyle.gn_grid}>
              <div className={GenreStyle.genres_supp_item}>
                <figure>
                  <img
                    src="./images/entertainment-icon.png"
                    alt="Influencers"
                  />
                </figure>
                <div className={GenreStyle.idn_img_txt}>
                  <span>Entertainment &amp; Comedy</span>
                </div>
              </div>
            </div>
            <div className={GenreStyle.gn_grid}>
              <div className={GenreStyle.genres_supp_item}>
                <figure>
                  <img src="./images/travel-icon.png" alt="Influencers" />
                </figure>
                <div className={GenreStyle.idn_img_txt}>
                  <span>Travel &amp; Lifestyle</span>
                </div>
              </div>
            </div>
            <div className={GenreStyle.gn_grid}>
              <div className={GenreStyle.genres_supp_item}>
                <figure>
                  <img src="./images/tech-icon.png" alt="Influencers" />
                </figure>
                <div className={GenreStyle.idn_img_txt}>
                  <span>Technology</span>
                </div>
              </div>
            </div>
            <div className={GenreStyle.gn_grid}>
              <div className={GenreStyle.genres_supp_item}>
                <figure>
                  <img src="./images/motivation-icon.png" alt="Influencers" />
                </figure>
                <div className={GenreStyle.idn_img_txt}>
                  <span>Motivational</span>
                </div>
              </div>
            </div>
            <div className={GenreStyle.gn_grid}>
              <div className={GenreStyle.genres_supp_item}>
                <figure>
                  <img src="./images/game-icon.png" alt="Influencers" />
                </figure>
                <div className={GenreStyle.idn_img_txt}>
                  <span>Gaming</span>
                </div>
              </div>
            </div>
            <div className={GenreStyle.gn_grid}>
              <div className={GenreStyle.genres_supp_item}>
                <figure>
                  <img src="./images/fitness-icon.png" alt="Influencers" />
                </figure>
                <div className={GenreStyle.idn_img_txt}>
                  <span>Sports &amp; fitness</span>
                </div>
              </div>
            </div>
            <div className={GenreStyle.gn_grid}>
              <div className={GenreStyle.genres_supp_item}>
                <figure>
                  <img src="./images/finance-icon.png" alt="Influencers" />
                </figure>
                <div className={GenreStyle.idn_img_txt}>
                  <span>Business &amp; Finance</span>
                </div>
              </div>
            </div>
            <div className={GenreStyle.gn_grid}>
              <div className={GenreStyle.genres_supp_item}>
                <figure>
                  <img src="./images/music-icon.png" alt="Influencers" />
                </figure>
                <div className={GenreStyle.idn_img_txt}>
                  <span>Dance &amp; Music</span>
                </div>
              </div>
            </div>
            <div className={GenreStyle.gn_grid}>
              <div className={GenreStyle.genres_supp_item}>
                <figure>
                  <img src="./images/food-icon.png" alt="Influencers" />
                </figure>
                <div className={GenreStyle.idn_img_txt}>
                  <span>Food</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genre;
