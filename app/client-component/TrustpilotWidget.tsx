'use client'
import { useEffect } from 'react';

interface TrustpilotWidgetProps {
    className?: string;
}

/**
 * Trustpilot 评价收集组件
 * 用于展示 Trustpilot 评价收集器，增强网站可信度和 SEO
 */
export const TrustpilotWidget: React.FC<TrustpilotWidgetProps> = ({ className }) => {
    useEffect(() => {
        // 动态加载 Trustpilot 脚本
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
        script.async = true;
        document.head.appendChild(script);

        return () => {
            // 清理脚本
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className={className}>
            <div
                className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="66c9401a321310cee73c1281"
                data-style-height="52px"
                data-style-width="100%"
            >
                <a
                    href="https://www.trustpilot.com/review/phonenumbergenerator.app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Trustpilot
                </a>
            </div>
        </div>
    );
}; 