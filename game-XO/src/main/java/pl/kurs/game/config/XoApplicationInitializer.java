package pl.kurs.game.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;


public class XoApplicationInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
    @Override
    protected String[] getServletMappings() {
        return new String[] { "/" };
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return null;
    }

    protected java.lang.Class<?>[] getRootConfigClasses() {
        return new Class[] { XOApplicationConfiguration.class };
    }
}
