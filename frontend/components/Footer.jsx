import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components/macro';
import { useRouter } from 'next/router';
import { Link } from './Link';
import { meta } from '../meta';
import { secondaryNavigation } from '../navigation';

const Container = styled.footer`
  background-color: #373d44;
  padding: 20px 0;
  margin-top: auto;

  font-size: 14px;
`;

const InnerItem = styled.div``;
const Inner = styled.div`
  margin: 0 auto;
  max-width: var(--width);
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  ${InnerItem}:not(:last-child) {
    margin-right: 32px;
  }
`;

const InfoItemIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  color: #fff;

  a {
    color: #fff;
  }

  ${InfoItemIcon} {
    margin-right: 8px;
  }
`;
const Info = styled(InnerItem)`
  display: flex;
  flex-direction: column;

  ${InfoItem}:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const NavigationItem = styled(Link)`
  flex: 1;
  padding: 4 8px;
  color: #fff;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }

  ${({ _active }) =>
    _active &&
    css`
      color: var(--color-accent);
    `}
`;
const Navigation = styled(InnerItem)`
  display: flex;
  flex-direction: column;

  ${NavigationItem}:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Footer = forwardRef((_, forwardingRef) => {
  const router = useRouter();

  return (
    <Container ref={forwardingRef}>
      <Inner>
        <Info>
          <InfoItem>
            {meta.label} - {meta.description}
          </InfoItem>
          <InfoItem>
            <InfoItemIcon src={meta.address.icon} />
            <div>{meta.address.label}</div>
          </InfoItem>
          <InfoItem>
            <InfoItemIcon src={meta.phone.icon} />
            <div>
              <a href={`tel:${meta.phone.label}`}>{meta.phone.label}</a>
            </div>
          </InfoItem>
          <InfoItem>
            <InfoItemIcon src={meta.email.icon} />
            <div>
              <a href={`mailto:${meta.email.label}`}>{meta.email.label}</a>
            </div>
          </InfoItem>
        </Info>
        <Navigation as="nav">
          {secondaryNavigation.map(({ title, path }, index) => (
            <NavigationItem
              _active={router.pathname === path ? 1 : 0}
              key={index}
              href={path}
            >
              {title}
            </NavigationItem>
          ))}
        </Navigation>
      </Inner>
    </Container>
  );
});

Footer.displayName = 'forwardRef(Footer)';
