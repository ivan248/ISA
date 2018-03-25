//package com.isa.project.bean;
//
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.List;
//import java.util.stream.Collector;
//import java.util.stream.Collectors;
//
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.AuthorityUtils;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//
//
//public class CurrentUser extends User implements UserDetails  {
//
//	public CurrentUser(final User user) {
//		super(user);
//	}
//	
//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//		// kakva prava pristupa imamo sa razlicitim ulogama se ovde definise
//		
//		
//
//		
//				
//		
//		return getRoles()
//						.stream()
//						.map(role -> new SimpleGrantedAuthority("ROLE_" + role.getRole()))
//						.collect(Collectors.toList());
//	}
//
//	@Override
//	public String getPassword() {
//		// TODO Auto-generated method stub
//		return super.getPasswordHash();
//	}
//
//	@Override
//	public String getUsername() {
//		// TODO Auto-generated method stub
//		return super.getEmail();
//	}
//
//	@Override
//	public boolean isAccountNonExpired() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//	@Override
//	public boolean isAccountNonLocked() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//	@Override
//	public boolean isCredentialsNonExpired() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//	@Override
//	public boolean isEnabled() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//	
//}
