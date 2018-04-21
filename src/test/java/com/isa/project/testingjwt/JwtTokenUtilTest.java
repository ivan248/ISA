package com.isa.project.testingjwt;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.within;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.time.Clock;
import java.util.Date;

import org.assertj.core.util.DateUtil;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.util.ReflectionTestUtils;

import com.isa.project.bean.User;
import com.isa.project.security.jwt.TokenProvider;

public class JwtTokenUtilTest {

    private static final String TEST_USERNAME = "testUser";

    @Mock
    private Clock clockMock;

    @InjectMocks
    private JwtTokenUtil jwtTokenUtil;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);

        ReflectionTestUtils.setField(jwtTokenUtil, "tokenValidityInMilliseconds", 3600L); // one hour
        ReflectionTestUtils.setField(jwtTokenUtil, "secret", "mySecret");
    }

//    @Test
//    public void testGenerateTokenGeneratesDifferentTokensForDifferentCreationDates() throws Exception {
//     
//
//        final String token = createToken();
//        final String laterToken = createToken();
//
//        assertThat(token).isNotEqualTo(laterToken);
//    }

    @Test
    public void getUsernameFromToken() throws Exception {
       

        final String token = createToken();

        assertThat(jwtTokenUtil.getUsernameFromToken(token)).isEqualTo(TEST_USERNAME);
    }

//    @Test
//    public void getCreatedDateFromToken() throws Exception {
//        final Date now = DateUtil.now();
//        
//
//        final String token = createToken();
//
//        assertThat(jwtTokenUtil.getExpirationDateFromToken(token)).isInSameMinuteWindowAs(now);
//    }

    @Test
    public void getExpirationDateFromToken() throws Exception {
        final Date now = DateUtil.now();
        
        final String token = createToken();

        final Date expirationDateFromToken = jwtTokenUtil.getExpirationDateFromToken(token);
        System.out.println("print");
        System.out.println(expirationDateFromToken + "  " + now);
        assertThat(DateUtil.timeDifference(expirationDateFromToken, now)).isCloseTo(36000000L, within(10000000L));
    }

    @Test
    public void canValidateToken() throws Exception {
        
        
       

        String token = createToken();
        assertThat(jwtTokenUtil.validateToken(token)).isTrue();
    }

    private String createToken() {
        return jwtTokenUtil.generateToken(new UserDetailsDummy(TEST_USERNAME));
    }
}
