package com.isa.project.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.isa.project.repository.UserRepository;
import com.isa.project.service.implementation.CurrentUserDetailsService;

@Configuration
@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true) // da bi mogao preauthorize u kontroleru da koristim
//@EnableJpaRepositories(basePackageClasses = UserRepository.class) // injectuje sve klase koje trebaju za jpa repository
//@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER) // iskljucio sam da stalno nudi logovanje
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	

	
	@Autowired
	private CurrentUserDetailsService userDetailService; // custom - ja napravio

	@Autowired
	AuthenticationManagerBuilder authenticationManager;
	
	@Autowired
	UserDetailsService userDService;
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
		
	@Override
    protected void configure(HttpSecurity http) throws Exception {
		
		http.csrf().disable();
		
//		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		http.authorizeRequests()
		    .antMatchers("api/login/test").permitAll()
		    .antMatchers("api/login/registrationMessage").hasAuthority("ROLE_SYS_ADMIN")
			//.antMatchers("api/login/all").hasRole("SYS_ADMIN")
			.anyRequest().permitAll();
		
        //    .defaultSuccessUrl("/login/home"); // defaultna springova login strana, mogu neku svoju da stavim .formLogin().permitAll()
		
/*        http.authorizeRequests()
                .antMatchers("/", "/login/**").permitAll() // koje putanje su svima dostupne
                .antMatchers("/login/all").hasAuthority("SYS_ADMIN") // koje putanje su dostupne samo ADMINU
                .anyRequest().fullyAuthenticated()
                .and()
                .formLogin()
                .loginPage("/login")s
                .failureUrl("/login")
                .usernameParameter("email")
                .permitAll()
                .and()
                .logout()
                .logoutUrl("/logout")
                .deleteCookies("remember-me")
                .logoutSuccessUrl("/")
                .permitAll()
                .and()
                .rememberMe()
                .and()
                .sessionManagement()
                .maximumSessions(1); // broj sesija po jednom useru, nmz na 2 browsera istovremeno ako je 1
*/    }
	


    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
     
    	
    	auth.userDetailsService(userDService).
    			passwordEncoder(new BCryptPasswordEncoder());
    	
    	
    	
    /*	(new org.springframework.security.crypto.password.PasswordEncoder() {
			
			@Override
			public boolean matches(CharSequence arg0, String arg1) {
				// bezz kodiranja trenutno
				return true;
			}
			
			@Override
			public String encode(CharSequence arg0) {
				// bezz kodiranja trenutno
				return arg0.toString();
			}
		});
    	*/
    	/*   auth.userDetailsService(userDetailsService)
                .passwordEncoder(new BCryptPasswordEncoder());
        auth.inMemoryAuthentication().
		        withUser("ivan").
		        password("ivan").
		        roles("REGISTERED_USER")
		        .and().
		        withUser("admin").
		        password("admin").
		        roles("SYS_ADMIN");*/
    }

}
