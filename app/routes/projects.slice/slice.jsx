import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'How I Work';
const description =
  'Designing a high-performing YouTube thumbnail requires more than creativity. My workflow focuses on understanding the video, creating a strong visual hook, and crafting thumbnails that stop viewers from scrolling and make them click.';

const roles = ['Research', 'Concept', 'Design'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Process' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
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
          url="mailto:Fatihzakaria.me@gmail.com"
          roles={roles}
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="Preview of a YouTube thumbnail design in progress."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Understanding the Video</ProjectSectionHeading>
              <ProjectSectionText>
                Every great thumbnail starts with understanding the video. I analyze the
                content, the target audience, and the key moment that will attract
                attention the most.
              </ProjectSectionText>
              <ProjectSectionText>
                The goal is to identify the strongest visual idea that will make viewers
                curious and encourage them to click on the video.
              </ProjectSectionText>
            </div>

            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="Thumbnail design layers and composition setup."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />

              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Thumbnail layout and visual elements being organized."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Creating the Concept</ProjectSectionHeading>
              <ProjectSectionText>
                Once the idea is clear, I start building the visual concept. This
                includes selecting strong colors, expressive faces, bold text, and
                visual elements that highlight the main story of the video.
              </ProjectSectionText>

              <ProjectSectionText>
                The goal is to communicate the video's message instantly while making
                the thumbnail stand out in a crowded YouTube feed.
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="Thumbnail concept development with colors and layout."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>

              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="Editing details of a YouTube thumbnail design."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>

            <div className={styles.gridText}>
              <ProjectSectionHeading>Designing the Thumbnail</ProjectSectionHeading>
              <ProjectSectionText>
                Using professional tools such as Photoshop and Canva, I craft the final
                thumbnail with strong contrast, clear typography, and impactful
                composition.
              </ProjectSectionText>

              <ProjectSectionText>
                Each element is carefully placed to guide the viewer’s eye and create a
                visual hook that makes people stop scrolling.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Final Result</ProjectSectionHeading>
              <ProjectSectionText>
                The final thumbnail is optimized to perform well on both desktop and
                mobile screens. It is designed to remain clear, engaging, and visually
                striking even at smaller sizes.
              </ProjectSectionText>

              <ProjectSectionText>
                My goal is simple: create thumbnails that increase click-through rates
                and help content creators grow their channels.
              </ProjectSectionText>
            </ProjectTextRow>

            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Creator reviewing a finished YouTube thumbnail design."
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>

      <Footer />
    </Fragment>
  );
};