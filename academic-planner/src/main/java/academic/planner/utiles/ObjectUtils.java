package academic.planner.utiles;

public class ObjectUtils {

    public static boolean isTrue( Boolean value ) {
        if ( value == null ) {
            return false;
        }
        return value;
    }
    public static <E> E getParameter( String objectName, E object ) {
        if ( object == null ) {
            throw new IllegalArgumentException("The supplied '" + objectName + "' is null.");
        }
        return object;
    }

}
