import styles from '@/components/Avatar/index.module.scss'

interface AvatarProps {
  src?: string;
  alt?: string;
}

export default function Avatar(props: AvatarProps) {
  const { src, alt } = props;
  return (
    <div className={styles.avatar}>
      <img
        className={styles.avatar_img}
       src={src ?? 'https://p3-pc-sign.douyinpic.com/aweme-avatar/tos-cn-i-0813c000-ce_owIn9sIQRiAhhUMiBuA4zzZyE6iAYtmAAZAvP~tplv-8yspqt5zfm-300x300.webp?lk3s=93de098e&x-expires=1747634400&x-signature=TdscDIg0os6LYPJYtEydtEC6ayQ%3D&from=2480802190&s=profile&se=false&sc=avatar&l=2025051714244407F6CD35569BC87560D2'} alt={alt} />
    </div>
  );
}