import { cn } from '@/lib/utils';
import { Roboto } from 'next/font/google'
interface HeadingProps {
    title: string;
    className?: string;
    size?: `[${string}]` | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}
const roboto = Roboto({ weight: '400', style: 'normal', subsets: ['latin'] })
export const Heading: React.FC<HeadingProps> = ({ title, className = "", size = '2xl' }) => {
    return (
        <h2 className={cn(`text-${size} tracking-tight`, className, roboto.className)}>
            {title}
        </h2>
    );
};