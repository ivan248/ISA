package com.isa.project.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.isa.project.security.jwt.JWTAuthenticationFilter;

@EnableGlobalMethodSecurity(prePostEnabled = true) //na nivou metoda security
@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	public void configureAuthenticaion(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
		authenticationManagerBuilder.userDetailsService(this.userDetailsService).passwordEncoder(bCryptPasswordEncoder());
	}
	
	@Bean
	public JWTAuthenticationFilter authenticaionTokenFilterBean() throws Exception {
		JWTAuthenticationFilter authenticationTokenFilter = new JWTAuthenticationFilter();
		authenticationTokenFilter.setAuthenticationManager(authenticationManagerBean());
		
		return authenticationTokenFilter;
		
	}
	

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		//http.authorizeRequests()
				//.antMatchers("/api/profile/get").hasRole("REGISTERED_USER")
				//.antMatchers("/api/login/login").permitAll();
				//.antMatchers("/api/home/getCinemas").access("hasRole('REGISTERED_USER')");
		http.cors().and().csrf().disable();
		
		
		http.addFilterBefore(authenticaionTokenFilterBean(), JWTAuthenticationFilter.class);
		
		// cors().and().csrf().disable().authorizeRequests().antMatchers(HttpMethod.POST,
		// SIGN_UP_URL).permitAll()
		// .antMatchers(HttpMethod.GET,"/api/login/confirm").permitAll()
		// .anyRequest().authenticated().and().addFilter(new
		// JWTAuthenticationFilter(authenticationManager()))
		// .addFilter(new JWTAuthorizationFilter(authenticationManager()))
		// this disables session creation on Spring Security
		// .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}

}
