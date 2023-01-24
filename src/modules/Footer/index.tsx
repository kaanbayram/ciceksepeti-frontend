import { Icon } from '@assets/svg';
import React from 'react';
import * as Styles from './assets/styles.scss';

export default function Footer() {
    return (
        <div>
            <div className={[Styles.footer, 'layout'].join(' ')}>
                <div className={Styles.footerContainer}>

                    <div>
                        <img src='./images/phoneIcon.png' />
                        <div>

                            <div>
                                <img src='./images/qr.png' />
                                <label>
                                    <h4>
                                        Çiçek Sepeti Mobil Uygulamayı İndirin
                                    </h4>
                                    <span>
                                        Mobil Uygulamayı QR Kod ile İndirin.
                                    </span>
                                </label>
                            </div>

                            <div className={Styles.marketIcons}>
                                <Icon iconName='appstore' />
                                <Icon iconName='playstore' />
                            </div>

                        </div>
                    </div>

                    <div className={Styles.footerLinks}>

                        <div>
                            <Icon iconName='ciceksepeti' />
                            <div>
                                <a href='#'>
                                    <Icon iconName='facebook' />
                                </a>
                                <a href='#'>
                                    <Icon iconName='twitter' />
                                </a>
                                <a href='#'>
                                    <Icon iconName='instagram' />
                                </a>
                                <a href='#'>
                                    <Icon iconName='youtube' />
                                </a>
                                <a href='#'>
                                    <Icon iconName='pencil' />
                                </a>

                            </div>
                            <span>
                                CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz.
                                6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz
                                aydınlatma metnine buradan ulaşabilirsiniz.
                            </span>
                        </div>

                        <ul>
                            <li>Faydalı Bilgiler</li>
                            <li>Çiçek Bakımı</li>
                            <li>Çiçek Eşliğinde Notlar</li>
                            <li>Çiçek Anlamları</li>
                            <li>Özel Günler</li>
                            <li>Mevsimlere Göre Çiçekler</li>
                            <li>BonnyFood Saklama Koşulları</li>
                            <li>Site Haritası</li>
                        </ul>

                        <ul>
                            <li>Kurumsal</li>
                            <li>Hakkımızda</li>
                            <li>Kariyer</li>
                            <li>ÇiçekSepeti'nde Satış</li>
                            <li>Kurumsal Müşterilerimiz</li>
                            <li>Reklamlarımız</li>
                            <li>Basında Biz</li>
                            <li>Kampanyalar</li>
                            <li>Vizyonumuz</li>
                        </ul>

                        <ul>
                            <li>İletişiö</li>
                            <li>Bize Ulaşın</li>
                            <li>Sıkça Sorulan Sorular</li>


                        </ul>

                        <ul>
                            <li>Gizlilik Sözleşmeleri</li>
                            <li>Mesafeli Satış Sözleşmesi</li>
                            <li>Bilgi Toplumu Hizmetleri</li>
                            <li>Gizlilik Sözleşmeleri</li>
                            <li>Ödeme Seçenekleri</li>
                            <li>Hesap Bilgileri</li>
                        </ul>


                    </div>

                    <div className={Styles.footerDesc}>
                        Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi mutlu
                        etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi” Çiçek Sepeti ile
                        sevdiklerinize özel günlerde online çiçek gönderebilirsiniz. Geniş çiçekçi ağı
                        sayesinde çiçek siparişleriniz Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde
                        gönderilir. Taze çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından
                        beğendiğiniz ürünü seçerek, hızlı bir şekilde online sipariş verebilirsiniz. Sevdiklerinizin
                        doğum günü, yıldönümü gibi mutlu günlerinde onların sevincine ortak olmak için yapmanız
                        gereken sadece birkaç tıkla sipariş vermek. Sevgililer Günü, Kadınlar Günü, Anneler Günü
                        gibi özel günlerde de çiçek, hediye ve lezzetli bonnyFood ürünleriyle
                        sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin adresi; ÇiçekSepeti.
                    </div>


                </div>
            </div>

            <div className={Styles.copyright}>
                Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş
            </div>
        </div>
    )
}
