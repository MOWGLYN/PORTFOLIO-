import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import { Footer } from '~/components/footer';
import {
    ProjectBackground,
    ProjectContainer,
    ProjectHeader,
    ProjectSection,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectSectionText,
} from '~/layouts/project';
import { Fragment, useEffect, useState } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './thumbnails.module.css';

const title = 'Thumbnail Impact & Statistics';
const description =
    'Data-driven results and the measurable impact of my YouTube thumbnail designs. By focusing on visual hooks, psychology, and A/B testing, I help creators achieve significant channel growth and maximize their reach.';
const roles = ['Visual Psychology', 'A/B Testing', 'Performance Analytics'];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const Thumbnails = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const metrics = [
        {
            value: '3.5x',
            label: 'Average CTR Increase',
            description: 'Multiplied Click-Through Rates across client channels by designing compelling, high-contrast visual hooks.',
        },
        {
            value: '2M+',
            label: 'Views Generated',
            description: 'Millions of additional views generated across YouTube by optimizing thumbnails for the recommendation algorithm.',
        },
        {
            value: '+45%',
            label: 'Audience Retention',
            description: 'Improved viewer retention by accurately promising content value in the thumbnail without clickbait.',
        },
        {
            value: '50+',
            label: 'Channels Scaled',
            description: 'Successfully partnered with dozens of creators to elevate their channel branding and subscriber growth.',
        }
    ];

    const chartData = [
        { month: 'Q1', value: 30 },
        { month: 'Q2', value: 45 },
        { month: 'Q3', value: 75 },
        { month: 'Q4', value: 100 },
    ];

    return (
        <Fragment>
            <ProjectContainer className={styles.thumbnails}>
                <ProjectBackground
                    src={sliceBackground}
                    srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
                    width={1280}
                    height={800}
                    placeholder={sliceBackgroundPlaceholder}
                    opacity={0.8}
                />

                <ProjectHeader
                    title={title}
                    description={description}
                    roles={roles}
                />

                <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <ProjectSectionHeading>Driving Channel Growth</ProjectSectionHeading>
                        <ProjectSectionText>
                            A great thumbnail is the difference between scrolling past and clicking. It's about creating
                            visual hooks that perform in the YouTube feed. Here is a snapshot of the impact my designs have
                            generated across key channel metrics.
                        </ProjectSectionText>

                        <div className={styles.metricsGrid}>
                            {metrics.map((metric, index) => (
                                <div
                                    key={index}
                                    className={styles.metricCard}
                                    style={{ transitionDelay: `${index * 100}ms`, opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)' }}
                                >
                                    <div className={styles.metricValue}>{metric.value}</div>
                                    <div className={styles.metricLabel}>{metric.label}</div>
                                    <div className={styles.metricDescription}>{metric.description}</div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.chartContainer}>
                            <div className={styles.chartHeader}>
                                <div className={styles.chartTitle}>Quarterly Channel Growth</div>
                                <div className={styles.chartSubtitle}>Average creator trajectory over 12 months after starting to work with me</div>
                            </div>

                            <div className={styles.bars}>
                                {chartData.map((data, index) => (
                                    <div key={index} className={styles.barWrapper}>
                                        <div className={styles.barValue}>{data.value}%</div>
                                        <div
                                            className={styles.bar}
                                            style={{ height: mounted ? `${data.value}%` : '0%' }}
                                        />
                                        <div className={styles.barLabel}>{data.month}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </ProjectSectionContent>
                </ProjectSection>

            </ProjectContainer>

            <Footer />
        </Fragment>
    );
};
