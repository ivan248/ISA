package com.isa.project.security.jwt;

import org.springframework.beans.factory.annotation.Value;
import io.jsonwebtoken.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import java.util.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class TokenProvider {

    private final Logger log = LoggerFactory.getLogger(TokenProvider.class);

    @Value("SecretKeyToGenJWTs")
    private String secret;

    @Value("18000")
    private long tokenValidityInMilliseconds;

    //private long tokenValidityInMillisecondsForRememberMe;

    public String getUsernameFromToken(String token) {
        String username;
        try {
            Claims claims = this.getClaimsFromToken(token);
            System.out.println(token);
            username = claims.getSubject();
        } catch (Exception e) {
            username = null;
        }
        return username;
    }

    private Claims getClaimsFromToken(String token) {
        Claims claims;
        try {
            claims = Jwts.parser().setSigningKey("SecretKeyToGenJWTs")
                    .parseClaimsJws(token).getBody();
            System.out.println(claims);
        } catch (Exception e) {
            claims = null;
            e.printStackTrace();
        }
        return claims;
    }

    public Date getExpirationDateFromToken(String token) {
        Date expirationDate;
        try {
            final Claims claims = this.getClaimsFromToken(token);
            expirationDate = claims.getExpiration();
        } catch (Exception e) {
            expirationDate = null;
        }
        return expirationDate;
    }

    public String generateToken(UserDetails userDetails) {
        Map<String,Object> claims = new HashMap<>();
        claims.put("user",userDetails.getUsername());
        claims.put("role",userDetails.getAuthorities());
        return Jwts.builder().setClaims(claims)
                .setExpiration(new Date(System.currentTimeMillis() + this.tokenValidityInMilliseconds * 1000))
                .signWith(SignatureAlgorithm.HS512, "SecretKeyToGenJWTs").compact();
    }

    public boolean validateToken(String authToken) {
        try {
            Jwts.parser().setSigningKey("SecretKeyToGenJWTs").parseClaimsJws(authToken);
            return true;
        } catch (SignatureException e) {
            log.info("Invalid JWT signature.");
            log.trace("Invalid JWT signature trace: {}", e);
        } catch (MalformedJwtException e) {
            log.info("Invalid JWT token.");
            log.trace("Invalid JWT token trace: {}", e);
        } catch (ExpiredJwtException e) {
            log.info("Expired JWT token.");
            log.trace("Expired JWT token trace: {}", e);
        } catch (UnsupportedJwtException e) {
            log.info("Unsupported JWT token.");
            log.trace("Unsupported JWT token trace: {}", e);
        } catch (IllegalArgumentException e) {
            log.info("JWT token compact of handler are invalid.");
            log.trace("JWT token compact of handler are invalid trace: {}", e);
        }
        return false;
    }
}
