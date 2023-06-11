type AvatarProps = {
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean;
}

const Avatar = ({ userId, isLarge, hasBorder }: AvatarProps) => {
    return (
        <div>{userId}</div>
    )
}

export default Avatar
