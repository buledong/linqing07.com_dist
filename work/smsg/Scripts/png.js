 
 f u n c t i o n   c o r r e c t P N G ( )   / /   c o r r e c t l y   h a n d l e   P N G   t r a n s p a r e n c y   i n   W i n   I E   5 . 5   &   6 .  
 {  
         v a r   a r V e r s i o n   =   n a v i g a t o r . a p p V e r s i o n . s p l i t ( " M S I E " )  
         v a r   v e r s i o n   =   p a r s e F l o a t ( a r V e r s i o n [ 1 ] )  
         i f   ( ( v e r s i o n   > =   5 . 5 )   & &   ( d o c u m e n t . b o d y . f i l t e r s ) )  
         {  
               f o r ( v a r   j = 0 ;   j < d o c u m e n t . i m a g e s . l e n g t h ;   j + + )  
               {  
                     v a r   i m g   =   d o c u m e n t . i m a g e s [ j ]  
                     v a r   i m g N a m e   =   i m g . s r c . t o U p p e r C a s e ( )  
                     i f   ( i m g N a m e . s u b s t r i n g ( i m g N a m e . l e n g t h - 3 ,   i m g N a m e . l e n g t h )   = =   " P N G " )  
                     {  
                           v a r   i m g I D   =   ( i m g . i d )   ?   " i d = ' "   +   i m g . i d   +   " '   "   :   " "  
                           v a r   i m g C l a s s   =   ( i m g . c l a s s N a m e )   ?   " c l a s s = ' "   +   i m g . c l a s s N a m e   +   " '   "   :   " "  
                           v a r   i m g T i t l e   =   ( i m g . t i t l e )   ?   " t i t l e = ' "   +   i m g . t i t l e   +   " '   "   :   " t i t l e = ' "   +   i m g . a l t   +   " '   "  
                           v a r   i m g S t y l e   =   " d i s p l a y : i n l i n e - b l o c k ; "   +   i m g . s t y l e . c s s T e x t  
                           i f   ( i m g . a l i g n   = =   " l e f t " )   i m g S t y l e   =   " f l o a t : l e f t ; "   +   i m g S t y l e  
                           i f   ( i m g . a l i g n   = =   " r i g h t " )   i m g S t y l e   =   " f l o a t : r i g h t ; "   +   i m g S t y l e  
                           i f   ( i m g . p a r e n t E l e m e n t . h r e f )   i m g S t y l e   =   " c u r s o r : h a n d ; "   +   i m g S t y l e  
                           v a r   s t r N e w H T M L   =   " < s p a n   "   +   i m g I D   +   i m g C l a s s   +   i m g T i t l e  
                           +   "   s t y l e = \ " "   +   " w i d t h : "   +   i m g . w i d t h   +   " p x ;   h e i g h t : "   +   i m g . h e i g h t   +   " p x ; "   +   i m g S t y l e   +   " ; "  
                           +   " f i l t e r : p r o g i d : D X I m a g e T r a n s f o r m . M i c r o s o f t . A l p h a I m a g e L o a d e r "  
                           +   " ( s r c = \ ' "   +   i m g . s r c   +   " \ ' ,   s i z i n g M e t h o d = ' s c a l e ' ) ; \ " > < / s p a n > "  
                           i m g . o u t e r H T M L   =   s t r N e w H T M L  
                           j   =   j - 1  
                     }  
               }  
         }          
 }  
 w i n d o w . a t t a c h E v e n t ( " o n l o a d " ,   c o r r e c t P N G ) ;  
 