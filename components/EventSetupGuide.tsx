import React, { useState } from 'react';
import { eventData } from './Data/eventSetupData';
import styles from '../styles/components/EventSetupGuide.module.scss';
import Image from 'next/image';
import attendeIcon from '@/public/Clip path group.svg'
import RegistrationIcon from "@/public/Vector (1).svg"
import AddWorkFlowIcon from "@/public/Vector (2).svg"
import RegistrationPortal from "@/public/Vector (3).svg"


interface Workflow {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

const EventSetupGuide: React.FC = () => {
  const { title, subtitle, moduleTitle } = eventData.guide;
  const { steps } = eventData;

  const [workflows, setWorkflows] = useState<Workflow[]>(
    steps[1].cards.map((card) => ({
      id: card.id,
      title: card.title,
      description: card.description,
    }))
  );


  return (
    <section className={styles.guide}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.moduleHeader}>
        <div className={styles.moduleIcon}>
          <Image src={attendeIcon} alt='' />
        </div>
        <h3 className={styles.moduleTitle}>{moduleTitle}</h3>
      </div>

      {steps.map((step) => (
        <div key={step.id} className={styles.step}>
          <h4 className={styles.stepTitle}>
            Step {step.stepNumber}:
            <span className={styles.stepName}>{step.title}</span>
          </h4>

          {step.type === 'settings' && (
            <div className={styles.settingsRow}>
              {step.cards.map((card) => (
                <div key={card.id} className={styles.item}>
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>

          )}

          {step.type === 'workflows' && (
            <>
              <div className={styles.cardsGrid}>
                {workflows.map((workflow) => (
                  <div
                    key={workflow.id}
                    className={styles.card}
                  >
                    <div className={styles.registrationSection}>
                      <div className={styles.cardIcon}>
                        <Image src={RegistrationIcon} alt='' />
                      </div>
                      <h5 className={styles.cardTitle}>{workflow.title}</h5>
                    </div>
                    <p className={styles.cardDesc}>{workflow.description}</p>
                  </div>
                ))}
              </div>

              <div className={styles.addWorkflow}>
                <div className={styles.moduleIcon}>
                  <Image src={AddWorkFlowIcon} alt='' />
                </div>
                <p className={styles.addText}>{step.addButtonText}</p>
              </div>
            </>
          )}

          {step.type === 'portal' && (
            <div className={styles.cardsGrid}>
              <div
                className={styles.card}
              >
                <div className={styles.registrationSection}>
                  <div className={styles.cardIcon}>
                    <Image src={RegistrationPortal} alt='' />
                  </div>
                  <h5 className={styles.cardTitle}>{step.cards[0].title}</h5>
                </div>
                <p className={styles.cardDesc}>{step.cards[0].description}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default EventSetupGuide;