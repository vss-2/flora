import Image from 'next/image';
import styles from './page.module.css';
import clsx from 'clsx';
import { Inter, Fredoka, Mali } from 'next/font/google';
import React from 'react';

const inter = Inter({
                      subsets: ['latin'],
                      variable: '--font-inter'
                    });
const fredoka = Fredoka({
                          subsets: ['latin'],
                          weight: ['400'],
                          variable: '--font-fredoka'
                        });
const mali = Mali({
                    subsets: ['latin'],
                    weight: ['700'],
                    variable: '--font-mali'
                  });

export default function Home() {
  return (
    <main>
      <div>
        <div className={styles.header}>
          <Image 
            src='/logo.svg'
            className={styles.round_logo}
            width={64}
            height={64}>
          </Image>
          <div className={styles.header_links}>
            <a href='/' className={styles.cta_text_black}>Store</a>
            <a href='/' className={styles.cta_text_black}>Setup</a>
            <a href='/' className={styles.cta_text_black}>About us</a>
          </div>
          <button className={styles.rect_action_button}>Login</button>
        </div>
        <div className={styles.call_to_action}>
          <div>
            <h1 className={styles.cta_text_green}>Flora</h1>
            <h3 className={styles.cta_text_black}>helps you keep</h3>
            <h1 className={styles.cta_text_green}>plants alive</h1>
          </div>
          <Image src='/vases.svg'
            width={1002}
            height={436}
          >
          </Image>
        </div>
        <div className={styles.convicing_info}>
          <div className={styles.icon_information}>
            <Image
              width={48}
              height={48}
              src='/batteryfull.svg'
            >
            </Image>
            <h3 className={styles.information}>5-day batt</h3>
          </div>
          <div className={styles.icon_information}>
            <Image
              width={48}
              height={48}
              src='/water.svg'
            >
            </Image>
            <h3 className={styles.information}>Umidity sensor</h3>
          </div>
          <div className={styles.icon_information}>
            <Image
              width={48}
              height={48}
              src='/sunlight.svg'
            >
            </Image>
            <h3 className={styles.information}>Sunlight sensor</h3>
          </div>
          <div className={styles.icon_information}>
            <Image
              width={48}
              height={48}
              src='/notification.svg'
            >
            </Image>
            <h3 className={styles.information}>Always on alerts</h3>
          </div>
        </div>
        <div className={styles.app_preview}>
          <Image
            width={323}
            height={548}
            src='/app_screenshot.svg'
          ></Image>
          <div className={styles.side_text_image}>
            <h1 className={styles.cta_text_green}>Care even when <p> the plant
               is alone </p></h1>
            <h3 className={styles.text_black}>Our vase keeps your <p> plant
               watered,</p> <p> the soil moist and </p> warns risk of sunburn</h3>
            <button className={styles.outline_button}>Buy now 
              <Image
                src='buy.svg'
                width={32}
                height={32}
                className={styles.buy_icon}
              ></Image>
            </button>
          </div>
        </div>
        <div className={styles.customer_comments}>
          <div className={styles.customer_comment}>
            <h3 className={styles.comment_text}>"Flora saved my tomatoes!"</h3>
            <h4 className={styles.text_black}>Joseph Smith</h4>
          </div>
          <div className={styles.customer_comment}>
            <h3 className={styles.comment_text}> "Home basil has never taste <p> like this" </p></h3>
            <h4 className={styles.text_black}>Cris Santos</h4>
          </div>
          <div className={styles.customer_comment}>
            <h3 className={styles.comment_text}> "Could raise my lavender, it survived" </h3>
            <h4 className={styles.text_black}>Jean Baptiste</h4>
          </div>
        </div>
        <div className={styles.div_banner}>
          <Image
            width={1110}
            height={560}
            src='/banner.png'
            className={styles.img_banner}
          >
          </Image>
        </div>
        <div className={styles.footer_row}>
          <div className={styles.footer}>
            <a href='/' className={styles.footer_text}>Product</a>
            <a href='/' className={styles.footer_text}>Partnerships</a>
            <a href='/' className={styles.footer_text}>Customers</a>
            <a href='/' className={styles.footer_text}>Careers</a>
            <a href='/' className={styles.footer_text}>Blog</a>
          </div>
          <div className={styles.footer}>
            <h3 className={styles.company_grey}>Flora @ 2023</h3>
          </div>
        </div>
      </div>
    </main>
  )
}
