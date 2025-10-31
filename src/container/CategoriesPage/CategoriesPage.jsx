import styles from "./CategoriesPage.module.css";
import { Helmet } from "react-helmet-async";

export default function CategoriesPage() {
  return (
    <>
      <Helmet>
        <title>Eyewear Categories – Find the Right Style | KJAR</title>
        <meta
          name="description"
          content="Explore KJAR's eyewear categories including classic, modern, blue-light, and more. Shop by style, need, or face shape."
        />
      </Helmet>
      <div>
        {/* Main Image  */}
        <div>
          <img
            src="https://kjar.in/images/bgImg7.png"
            alt="Main Image"
            className={styles.bgImgs}
          />
        </div>

        {/* Container 1 */}
        <div>
          <div className={styles.txtBox}>
            <div className={styles.chooseTxt}>CHOOSE BY</div>
            <div className={styles.shapeTxt}>SHAPES</div>
          </div>
          <div className={styles.frameContainer}>
            {/* Shape 1 */}
            <div className={styles.frameBox}>
              <div>
                <img
                  src="https://kjar.in/images/frame.png"
                  alt="Frames"
                  className={styles.bgImgs}
                />
              </div>
              <div className={styles.collectionName}>NEENAH COLLECTIONS</div>
            </div>
            {/* Shape 2 */}
            <div className={styles.frameBox}>
              <div>
                <img
                  src="https://kjar.in/images/frame.png"
                  alt="Frames"
                  className={styles.bgImgs}
                />
              </div>
              <div className={styles.collectionName}>RYZON TAYLOR</div>
            </div>
            {/* Shape 3 */}
            <div className={styles.frameBox}>
              <div>
                <img
                  src="https://kjar.in/images/frame.png"
                  alt="Frames"
                  className={styles.bgImgs}
                />
              </div>
              <div className={styles.collectionName}>NEENAH COLLECTIONS</div>
            </div>
            {/* Shape 4 */}
            <div className={styles.frameBox}>
              <div>
                <img
                  src="https://kjar.in/images/frame.png"
                  alt="Frames"
                  className={styles.bgImgs}
                />
              </div>
              <div className={styles.collectionName}>RYZON TAYLOR</div>
            </div>
            {/* Shape 5 */}
            <div className={styles.frameBox}>
              <div>
                <img
                  src="https://kjar.in/images/frame.png"
                  alt="Frames"
                  className={styles.bgImgs}
                />
              </div>
              <div className={styles.collectionName}>GEORGE CLOONEY</div>
            </div>
          </div>
        </div>

        {/* Container 2 */}
        <div>
          <div className={styles.featuredTxt}>FEATURED PRODUCTS</div>
          <div className={styles.imageContainer}>
            <div className={styles.filterImg}>
              <img
                src="https://kjar.in/images/bgImg7.png"
                alt="Main Image"
                className={styles.bgImgs}
              />
            </div>
            {/* Categories Box  */}
            <div className={styles.categoryBox}>
              {/* Category 1 */}
              <div className={styles.categorySub}>
                <div>
                  <img
                    src="https://kjar.in/images/category1.png"
                    alt="Category_1"
                    className={styles.bgImgs}
                    style={{ background: "#6e9986" }}
                  />
                </div>
                <div>
                  <div className={styles.collectionLabel}>
                    SIGMA MALE COLLECTION
                  </div>
                  <div className={styles.viewAllTxt}>VIEW ALL</div>
                </div>
              </div>
              {/* Category 2 */}
              <div className={styles.categorySub}>
                <div>
                  <img
                    src="https://kjar.in/images/category2.png"
                    alt="Category_2"
                    className={styles.bgImgs}
                  />
                </div>
                <div>
                  <div className={styles.collectionLabel}>
                    ALPHA LADY COLLECTION
                  </div>
                  <div className={styles.viewAllTxt}>VIEW ALL</div>
                </div>
              </div>
              {/* Category 3 */}
              <div className={styles.categorySub}>
                <div>
                  <img
                    src="https://kjar.in/images/category3.png"
                    alt="Category_3"
                    className={styles.bgImgs}
                  />
                </div>
                <div>
                  <div className={styles.collectionLabel}>
                    ANDREW TATE COLLECTION
                  </div>
                  <div className={styles.viewAllTxt}>VIEW ALL</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Container 3 */}
        <div className={styles.containerThree}>
          {/* Red Box With Text  */}
          <div className={styles.specialCollBox}>
            <div>
              <div>SPECIAL</div>
              <div>COLLECTION</div>
              <div>FOR KIDS</div>
            </div>
          </div>

          {/* Green Box With Bottom Text */}
          <div className={styles.greenBoxPos}>
            <div className={styles.greenContainer}></div>
            <div className={styles.greenBoxTxt}>
              <div>NEW COLLECTION</div>
              <div>Explore All</div>
            </div>
          </div>

          {/* Two Green Boxes */}
          <div className={styles.twoGreenBoxes}>
            <div className={styles.twoGreen}></div>
            <div className={styles.twoGreen}></div>
          </div>
        </div>

        {/* Container 4 */}
        <div className={styles.containerFour}>
          {/* First Line */}
          <div className={styles.boxLine}>
            {/* Box 1 */}
            <div className={styles.padBox}>
              <div>
                <img
                  src="https://kjar.in/images/frame.png"
                  alt="Frames"
                  className={styles.bgImgs}
                />
              </div>
              <div className={styles.frameDesc}>
                <div className={styles.smartGeekTxt}>SMART GEEK</div>
                <div className={styles.red14TXt}>
                  DISCOVER TIMELESS ELEGANCE
                </div>
                <div className={styles.frameDescTxt}>
                  Neenah is the celebrative collection of KJAR which is a
                  testament to its timeless legacy.
                </div>
                <div className={styles.red14TXt}>BUY NOW</div>
              </div>
            </div>
            {/* Box 2 */}
            <div className={styles.greenBox}></div>
            {/* Box 3 */}
            <div className={styles.greenBox}></div>
            {/* Box 4 */}
            <div className={styles.greenBox}></div>
          </div>
          {/* Second Line  */}
          <div className={styles.boxLine}>
            {/* Box 1 */}
            <div className={styles.chooseByBox}>
              <div>
                <div className={styles.chooseByTxt}>CHOOSE BY</div>
                <div className={styles.sTxt}>SHAPES</div>
                <div className={styles.chooseByTxt}>CHOOSE BY</div>
              </div>
            </div>
            {/* Box 2 */}
            <div className={styles.padBox}>
              <div>
                <img
                  src="https://kjar.in/images/frame.png"
                  alt="Frames"
                  className={styles.bgImgs}
                />
              </div>
              <div className={styles.frameDesc}>
                <div className={styles.smartGeekTxt}>SMART GEEK</div>
                <div className={styles.red14TXt}>
                  DISCOVER TIMELESS ELEGANCE
                </div>
                <div className={styles.frameDescTxt}>
                  Neenah is the celebrative collection of KJAR which is a
                  testament to its timeless legacy.
                </div>
                <div className={styles.red14TXt}>BUY NOW</div>
              </div>
            </div>
            {/* Box 3 */}
            <div className={styles.padBox}>
              <div>
                <img
                  src="https://kjar.in/images/frame.png"
                  alt="Frames"
                  className={styles.bgImgs}
                />
              </div>
              <div className={styles.frameDesc}>
                <div className={styles.smartGeekTxt}>SMART GEEK</div>
                <div className={styles.red14TXt}>
                  DISCOVER TIMELESS ELEGANCE
                </div>
                <div className={styles.frameDescTxt}>
                  Neenah is the celebrative collection of KJAR which is a
                  testament to its timeless legacy.
                </div>
                <div className={styles.red14TXt}>BUY NOW</div>
              </div>
            </div>
            {/* Box 4 */}
            <div className={styles.padBox}>
              <div>
                <img
                  src="https://kjar.in/images/frame.png"
                  alt="Frames"
                  className={styles.bgImgs}
                />
              </div>
              <div className={styles.frameDesc}>
                <div className={styles.smartGeekTxt}>SMART GEEK</div>
                <div className={styles.red14TXt}>
                  DISCOVER TIMELESS ELEGANCE
                </div>
                <div className={styles.frameDescTxt}>
                  Neenah is the celebrative collection of KJAR which is a
                  testament to its timeless legacy.
                </div>
                <div className={styles.red14TXt}>BUY NOW</div>
              </div>
            </div>
          </div>
          {/* Third Line  */}
          <div className={styles.boxLine}>
            {/* Box 1 */}
            <div></div>
            {/* Box 2 */}
            <div className={styles.greenBox}></div>
            {/* Box 3 */}
            <div className={styles.padBox}>
              <div>
                <img
                  src="https://kjar.in/images/frame.png"
                  alt="Frames"
                  className={styles.bgImgs}
                />
              </div>
              <div className={styles.frameDesc}>
                <div className={styles.smartGeekTxt}>SMART GEEK</div>
                <div className={styles.red14TXt}>
                  DISCOVER TIMELESS ELEGANCE
                </div>
                <div className={styles.frameDescTxt}>
                  Neenah is the celebrative collection of KJAR which is a
                  testament to its timeless legacy.
                </div>
                <div className={styles.red14TXt}>BUY NOW</div>
              </div>
            </div>
            {/* Box 4 */}
            <div className={styles.padBox}>
              <div>
                <img
                  src="https://kjar.in/images/frame.png"
                  alt="Frames"
                  className={styles.bgImgs}
                />
              </div>
              <div className={styles.frameDesc}>
                <div className={styles.smartGeekTxt}>SMART GEEK</div>
                <div className={styles.red14TXt}>
                  DISCOVER TIMELESS ELEGANCE
                </div>
                <div className={styles.frameDescTxt}>
                  Neenah is the celebrative collection of KJAR which is a
                  testament to its timeless legacy.
                </div>
                <div className={styles.red14TXt}>BUY NOW</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
