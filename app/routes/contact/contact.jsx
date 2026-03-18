import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';

// Initialize EmailJS with public key
emailjs.init('YH--x4cjGmyv69C9Z');

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

export const Contact = () => {
  const errorRef = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const initDelay = tokens.base.durationS;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setErrors({});

    const formData = new FormData(e.target);
    const isBot = String(formData.get('name'));
    const email = String(formData.get('email'));
    const message = String(formData.get('message'));
    const newErrors = {};

    // Return without sending if a bot trips the honeypot
    if (isBot) {
      setSuccess(true);
      setSending(false);
      return;
    }

    // Handle input validation
    if (!email || !EMAIL_PATTERN.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!message) {
      newErrors.message = 'Please enter a message.';
    }

    if (email.length > MAX_EMAIL_LENGTH) {
      newErrors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSending(false);
      return;
    }

    try {
      console.log('Sending email via EmailJS...');
      
      // Send email via EmailJS
      const result = await emailjs.send(
        'service_36061wz',
        'template_hwr500b',
        {
          from_email: email,
          message: message,
         reply_to: email,
        }
      );
      
      console.log('Email sent successfully:', result);
      setSuccess(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrors({ 
        general: `Failed to send: ${error.text || error.message || 'Unknown error'}` 
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section className={styles.contact}>
      <Transition unmount in={!success} timeout={1600}>
        {({ status, nodeRef }) => (
          <form
            className={styles.form}
            ref={nodeRef}
            onSubmit={handleSubmit}
          >
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            {/* Hidden honeypot field to identify bots */}
            <Input
              className={styles.botkiller}
              label="Name"
              name="name"
              maxLength={MAX_EMAIL_LENGTH}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your email"
              type="email"
              name="email"
              maxLength={MAX_EMAIL_LENGTH}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Message"
              name="message"
              maxLength={MAX_MESSAGE_LENGTH}
            />
            <Transition
              unmount
              in={!sending && Object.keys(errors).length > 0}
              timeout={msToNum(tokens.base.durationM)}
            >
              {({ status: errorStatus, nodeRef }) => (
                <div
                  className={styles.formError}
                  ref={nodeRef}
                  data-status={errorStatus}
                  style={cssProps({
                    height: errorStatus ? errorRef.current?.offsetHeight : 0,
                  })}
                >
                  <div className={styles.formErrorContent} ref={errorRef}>
                    <div className={styles.formErrorMessage}>
                      <Icon className={styles.formErrorIcon} icon="error" />
                      {errors.email}
                      {errors.message}
                      {errors.general}
                    </div>
                  </div>
                </div>
              )}
            </Transition>
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText="Sending..."
              icon="send"
              type="submit"
            >
              Send message
            </Button>
          </form>
        )}
      </Transition>
      <Transition unmount in={success}>
        {({ status, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              Message Sent
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              I’ll get back to you within a couple days, sit tight
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevron-right"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
