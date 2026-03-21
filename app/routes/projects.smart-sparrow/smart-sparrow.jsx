import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './smart-sparrow.module.css';
import { useState } from 'react';

// Import all thumbnail images with sanitized import names
import thumb1 from '~/assets/thumbs/_f8eSwcaT9U-HD.jpg';
import thumb2 from '~/assets/thumbs/15_Most_Luxurious_Cars_In_The_WorldONE.png';
import thumb3 from '~/assets/thumbs/Airbus_Drops_A_BOMBSHELL_And_This_Could_Be_The_END_Of_Boeing__ONE.png';
import thumb4 from '~/assets/thumbs/Blake_Lively_TWO.png';
import thumb5 from '~/assets/thumbs/Canada_s_Shocking_Move_Could_Cripple__ONE.png';
import thumb6 from '~/assets/thumbs/Canada_s_Shocking_Move_Could_Cripple__THREE.png';
import thumb7 from '~/assets/thumbs/Canada_s_Shocking_Move_Could_Cripple_TWO.png';
import thumb8 from '~/assets/thumbs/Elon_Musk_SHOCKED_as_U.K._Bans_Cybertruck_on_Roads_TWO.png';
import thumb9 from '~/assets/thumbs/Farmers_Are_Fed_Up_With_John_ONE.png';
import thumb10 from '~/assets/thumbs/HAPPENING_NOW__Canada_Shuts_Down__103.3_Billion_Oil_Export_to_U.S._Industry_With_Bold_Move_3.png';
import thumb11 from '~/assets/thumbs/IMG-20250130-WA0007.jpg';
import thumb12 from '~/assets/thumbs/John_Deere_Just_THREATENED_Donald_Trump_TWO.png';
import thumb13 from '~/assets/thumbs/John_Deere_SHUTS_DOWN__174_Billion__TWO.png';
import thumb14 from '~/assets/thumbs/John_Deere_SHUTS_DOWN__174_Billion_ONE.png';
import thumb15 from '~/assets/thumbs/MISTRAL_DESIGN__-_2024-04-24T191647.006.png';
import thumb16 from '~/assets/thumbs/MISTRAL_DESIGN__21_.png';
import thumb17 from '~/assets/thumbs/MISTRAL_DESIGN__22_.png';
import thumb18 from '~/assets/thumbs/MISTRAL_DESIGN__29_.png';
import thumb19 from '~/assets/thumbs/Trump_in_PANIC_as_protests_ERUPT_across_America_1.png';
import thumb20 from '~/assets/thumbs/Trump_in_PANIC_as_protests_ERUPT_across_America_2__1_.png';
import thumb21 from '~/assets/thumbs/Trump_in_PANIC_as_protests_ERUPT_across_America_2__2_.png';

const title = 'My Thumbnail Designs';
const description = 'A collection of my favorite thumbnail designs and concepts.';

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

const thumbs = [
  thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8, thumb9, thumb10,
  thumb11, thumb12, thumb13, thumb14, thumb15, thumb16, thumb17, thumb18, thumb19, thumb20, thumb21
];

export const SmartSparrow = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectHeader title={title} description={description} />
        <ProjectSection>
          <div className={styles.grid}>
            {thumbs.map((thumb, index) => (
              <div 
                key={index} 
                className={styles.card}
                onClick={() => handleImageClick(index)}
                style={{ cursor: 'pointer' }}
              >
                <Image
                  className={styles.image}
                  src={thumb}
                  alt={`Thumbnail design ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </ProjectSection>
      </ProjectContainer>
      
      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className={styles.modal} 
          onClick={handleCloseModal}
        >
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            <Image
              className={styles.modalImage}
              src={thumbs[selectedImage]}
              alt={`Enlarged view ${selectedImage + 1}`}
            />
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};
