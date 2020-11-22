import React, { forwardRef, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components/macro';
import { Link } from './Link';
import { meta } from '../meta';
import { mainNavigation } from '../navigation';

const Container = styled.header`
  position: fixed;
  width: 100%;
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
`;
const Inner = styled.div`
  margin: 0 auto;
  max-width: var(--width);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-weight: bold;
  color: #000;
  text-decoration: none;
  margin-right: 20px;
`;

const RightHeader = styled.div`
  display: flex;
`;

const InfoItemIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #3c3c3c;
  padding: 8px 0;

  a {
    color: #3c3c3c;
  }

  ${InfoItemIcon} {
    margin-right: 8px;
  }
`;
const Info = styled.div`
  display: flex;

  ${InfoItem}:not(:last-child) {
    margin-right: 8px;
  }
`;

const Navigation = styled.nav`
  display: flex;
`;
const NavigationItem = styled(Link)`
  flex: 1;
  padding: 20px 20px;
  text-align: center;
  color: #000;
  text-decoration: none;

  :hover {
    background-color: #f4f4f4;
  }

  ${({ _active }) =>
    _active &&
    css`
      color: var(--color-accent);
    `}
`;

const Cart = styled.div`
  // padding: 20px 20px;
`;

export const Header = forwardRef((_, forwardingRef) => {
  const [fixed, setFixed] = useState(false);
  const router = useRouter();

  return (
    <Container ref={forwardingRef}>
      <Inner>
        <Logo href="/">
          {meta.label}
          <br />
          {meta.description}
        </Logo>

        <RightHeader>
          {/*<Info>*/}
          {/*  <InfoItem>*/}
          {/*    <InfoItemIcon src={meta.phone.icon} />*/}
          {/*    <div>*/}
          {/*      <a href={`tel:${meta.phone.label}`}>{meta.phone.label}</a>*/}
          {/*    </div>*/}
          {/*  </InfoItem>*/}
          {/*  <InfoItem>*/}
          {/*    <InfoItemIcon src={meta.email.icon} />*/}
          {/*    <div>*/}
          {/*      <a href={`mailto:${meta.email.label}`}>{meta.email.label}</a>*/}
          {/*    </div>*/}
          {/*  </InfoItem>*/}
          {/*</Info>*/}
          <Navigation>
            {mainNavigation.map(({ title, path }, index) => (
              <NavigationItem
                _active={router.pathname === path ? 1 : 0}
                key={index}
                href={path}
              >
                {title}
              </NavigationItem>
            ))}
          </Navigation>
          <Cart className="snipcart-checkout">
            <img src="/cart.svg" alt="Cart" />
            <span className="snipcart-total-price" />
          </Cart>
        </RightHeader>
      </Inner>
    </Container>
  );
});

Header.displayName = 'forwardRef(Header)';
