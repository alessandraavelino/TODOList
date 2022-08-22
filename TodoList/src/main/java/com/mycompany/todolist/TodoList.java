/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package com.mycompany.todolist;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.ListIterator;
import java.util.Scanner;

/**
 *
 * @author Alessandra
 */
public class TodoList {

    public static void main(String[] args) {
        Tarefa tarefa = new Tarefa();
        Collection<Tarefa> t = new ArrayList<Tarefa>();
        System.out.println("Hello World!");
        Scanner teclado = new Scanner(System.in);
        int opc;
        do {
            System.out.println("1 - INSERIR TAREFA");
            System.out.println("2 - MOSTRAR TAREFAS");
            System.out.println("3 - DELETAR TAREFA");
            System.out.println("--> ");
            opc = teclado.nextInt(); 
            Scanner entradaTexto = new Scanner(System.in);
            
            switch(opc){
                case 1:
                    System.out.println("Digite o nome: ");
                    String nome = entradaTexto.nextLine();
                    
                    System.out.println("Informe a descrição: ");
                    String descricao = entradaTexto.nextLine();
                    
                    System.out.println("Informe a data de término: ");
                    String data = entradaTexto.nextLine();
                    
                    System.out.println("Informe o grau de prioridade 1-5: ");
                    int prioridade = teclado.nextInt();
                    
                    System.out.println("Informe a categoria: ");
                    String categoria = entradaTexto.nextLine();
                    
                    System.out.println("Informe o status (todo, going, done): ");
                    String status = entradaTexto.nextLine();
                    
                    t.add(new Tarefa(nome, descricao, data, prioridade, categoria, status));
                    
                    break;

                case 2: 
                    System.out.println("Listando Tarefas");
                    Iterator<Tarefa> i = t.iterator();
                    while (i.hasNext()){
                        Tarefa trf = i.next();
                        System.out.println(trf);
                        
                    }
                    break;
                case 3:
                    System.out.println("Digite o nome da tarefa para deletar: ");
                    nome = entradaTexto.nextLine();
                    i =  t.iterator();
                    while (i.hasNext()){
                        Tarefa tr = i.next();
                        if (tr.getNome() == null ? nome == null : tr.getNome().equals(nome)){
                            i.remove();
                        }
                        
                    }
                    break;
            }
        }while (opc != 0);
    }
}
