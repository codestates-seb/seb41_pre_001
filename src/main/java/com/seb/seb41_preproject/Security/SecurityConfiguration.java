//package com.seb.seb41_preproject.Security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.AuthenticationFailureHandler;
//import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
//import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
//
//public class SecurityConfiguration {
//
//    private AuthenticationFailureHandler authFailureHandler;
//    private AuthenticationSuccessHandler authSuccessHandler;
//
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http.csrf().disable();
//        http.authorizeHttpRequests()
//                .requestMatchers("/", //mvcMatchers는 사용이 왜 안될까?
//                        "/member/**",
//                        "/error/**",
//                        "/js/**",
//                        "/css/**",
//                        "/image/**")
//                .permitAll() // 해당 경로 접근 허용
//                .anyRequest().authenticated(); // 그 외 요청 인증 요구
//        http.formLogin()
//                .loginPage("/member/login") // 로그인 페이지 url
//                .loginProcessingUrl("/login/action") // 로그인 처리 url 지정
//                .successHandler(authSuccessHandler) // 성공 핸들러
//                .failureHandler(authFailureHandler); // 실패 핸들러
//        http.logout()
//                .logoutRequestMatcher(new AntPathRequestMatcher("/member/logout")) // 로그아웃 url
//                .logoutSuccessUrl("/member/login") // 성공 리턴 url
//                .invalidateHttpSession(true) // 인증정보 지우고 세션 무효화
//                .deleteCookies("JSESSIONID", "remember-me"); // JSESSIONID, remember-me 쿠키 삭제
//        http.sessionManagement()
//                .maximumSessions(1)// 세션 최대 허용 수 1, -1인 경우 무제한 세션 허용
//                .maxSessionsPreventsLogin(false) // true면 중복 로그인 막고, false면 이전 로그인 세션 해제
//                .expiredUrl("/"); // 세션 만료된 경우 이동 할 페이지 지정 (아직 지정안함)
//        http.rememberMe() // 로그인 유지
//              //  .key() // 토큰 생성시 키값 (키 값도 설정해야함)
//                .alwaysRemember(false) // 항상 기억할 것인지 여부
//                .tokenValiditySeconds(43200) //12시간 유지
//                .rememberMeParameter("remember-me"); // rememberMe 파라미터 이름 지정
//
//        return http.build();
//    }
//}
