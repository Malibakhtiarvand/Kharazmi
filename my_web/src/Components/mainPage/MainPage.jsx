import axios from "axios";
import React, { useState } from "react";
import OurWorks from './OurWorks-img.png'
import About from './About.jpg'
import students from './students.jpg'

export const MainPage = () => {
    return (
        <div className="MainPage" style={{ textAlign: 'right' }}>
            <div className="welcome_to_mySite">
                <p style={{ color: 'white', textAlign: '' }}>سلام دوست من قراره حسابی با هم برنامه نویسی کار کنیم حاضری؟ <span style={{ color: 'bisque' }}>پس بزن بریم</span></p>
            </div><br /><br />

            <div>
                <h3 className="">خدمات ما</h3>

                <div className="MainPage__index d-flex" dir="" style={{ alignItems: 'center', textAlign: 'justify' }}>
                    <img src={OurWorks} alt="" />
                    <p dir="rtl">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>

                </div>
            </div><br /><br /><br />

            <div style={{ backgroundColor: 'aliceblue' }}>
                <h3 className="">درباره ما</h3>

                <div className="MainPage__index d-flex" dir="" style={{ alignItems: 'center', textAlign: 'justify' }}>
                    <img height='300px' src={About} alt="" />
                    <p dir="rtl">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>

                </div>
            </div><br /><br /><br />


            <div style={{ backgroundColor: 'black',color:'GrayText' }}>
                <h3 className="whyOut__h3">🤔چرا ما؟</h3>

                <div className=" d-flex" style={{gap:'10px',flexWrap:'wrap'}}>
                    <div className="WhyOur__mainPage">
                        <h2>lorm</h2>
                        <p>
                            error rerum in sit tempora sapiente. Aliquam dolore pariatur non veniam explicabo, consequuntur ratione excepturi sed perferendis.
                        </p>
                    </div>


                    <div className="WhyOur__mainPage">
                        <h2>lorm</h2>
                        <p>
                            error rerum in sit tempora sapiente. Aliquam dolore pariatur non veniam explicabo, consequuntur ratione excepturi sed perferendis.
                        </p>
                    </div>


                    <div className="WhyOur__mainPage">
                        <h2>lorm</h2>
                        <p>
                            error rerum in sit tempora sapiente. Aliquam dolore pariatur non veniam explicabo, consequuntur ratione excepturi sed perferendis.
                        </p>
                    </div>


                    <div className="WhyOur__mainPage">
                        <h2>lorm</h2>
                        <p>
                            error rerum in sit tempora sapiente. Aliquam dolore pariatur non veniam explicabo, consequuntur ratione excepturi sed perferendis.
                        </p>
                    </div>



                    <div className="WhyOur__mainPage">
                        <h2>lorm</h2>
                        <p>
                            error rerum in sit tempora sapiente. Aliquam dolore pariatur non veniam explicabo, consequuntur ratione excepturi sed perferendis.
                        </p>
                    </div>


                </div>
            </div>


        </div>
    )
}
